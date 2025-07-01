import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Button from 'src/components/buttons/button';
import InputText from 'src/components/inputs/inputText';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import cores from 'src/themes/cores';
import { dispositivoModalStyles } from 'src/styles/models/dispositivoModalStyles';
import { DispositivoApi } from 'src/services/dispositivos/dispositivoApi';

type props = {
    isVisible: boolean;
    cloused: () => void;
    idAlterar?: number;
}

const DispositivoModal = ({isVisible, cloused, idAlterar = undefined}: props) => {
    const [urlImagem, setUrlImagem] = useState<string>();
    const [nome, setNome] = useState<string>('');
    const [codigoExterno, setCodigoExterno] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    useEffect(() => {
        if(isVisible && idAlterar)
            buscarDispositivo(idAlterar);
    },[isVisible, idAlterar])


    async function buscarDispositivo(id: number){
        let api = new DispositivoApi();

        let ret = await api.Recuperar(id);

        if(ret == null)
            return;

        setNome(ret.nome);
        setCodigoExterno(ret.codigoExterno);
        setDescricao(ret.descricao);
        setUrlImagem(ret.urlImagem);
    }

    async function Salvar() {
        if(idAlterar)
            await SalvarAlteracao();
        else
            await SalvarNovo();

        cloused();
    }

    async function SalvarNovo() {
        let api = new DispositivoApi();

        await api.Novo({
            codigoExterno: codigoExterno,
            descricao: descricao,
            nome: nome,
            urlImagem: urlImagem
        });
    }
    async function SalvarAlteracao() {
        let api = new DispositivoApi();

        let ret = await api.Alterar({
            id: idAlterar ?? 0,
            codigoExterno: codigoExterno,
            descricao: descricao,
            nome: nome,
            urlImagem: urlImagem
        });
    }


    return(
        <Modal isVisible={isVisible} onBackdropPress={cloused}>
            <View style={dispositivoModalStyles.container}>
                <View style={dispositivoModalStyles.containerImagem}>
                    <TouchableOpacity style={dispositivoModalStyles.imagem}>
                        {urlImagem
                            ?<Image source={{uri: urlImagem}}/>
                            : <FontAwesome6 name="image" size={24} color={cores.primary} />
                        }
                    </TouchableOpacity>
                </View>

                <InputText label='Nome' 
                    value={nome}
                    onChangeText={setNome}/>

                    
                <InputText label='Codigo externo' 
                    value={codigoExterno}
                    onChangeText={setCodigoExterno}/>

                <InputText label='Descrição' 
                    textAlign='left'
                    textAlignVertical='top'
                    multiline={true}
                    numberOfLines={3}
                    styleInput={{height: 100}}
                    value={descricao}
                    onChangeText={setDescricao}/>
                
                <View style={dispositivoModalStyles.botton}>
                    <Button title="Cancelar" onPress={cloused} style={{backgroundColor:'#FF0702', width: '49%'}} />
                    <Button title="Salvar" onPress={Salvar} style={{width: '49%'}} />
                </View>
            </View>
        </Modal>
    )
}

export default DispositivoModal;