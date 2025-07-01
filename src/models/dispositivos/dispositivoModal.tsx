import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Button from 'src/components/buttons/button';
import InputText from 'src/components/inputs/inputText';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import cores from 'src/themes/cores';
import { dispositivoModalStyles } from 'src/styles/models/dispositivoModalStyles';

type props = {
    isVisible: boolean;
    cloused: () => void;
}

const DispositivoModal = ({isVisible, cloused}: props) => {
    const [urlImagem, setUrlImagem] = useState<string>();
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');


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
                    <Button title="Salvar" onPress={cloused} style={{width: '49%'}} />
                </View>
            </View>
        </Modal>
    )
}

export default DispositivoModal;