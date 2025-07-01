import { StyleSheet } from 'react-native';
import fonts from 'src/themes/fonts';

const loginScreenStyles = StyleSheet.create({
    screen:{
        height: '100%',
        justifyContent: 'center',
        gap: 20
    },


    logo_container:{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo_Text:{
        fontSize: fonts.size.xxlarge,
        fontFamily: fonts.family.league_gothic,
        width: '100%',
        textAlign: 'center'
    },
    logo_imagem: {
        width: 91,
        height: 91
    },

    container:{
        display: 'flex',
        gap: 20,
    },
    texto_container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default loginScreenStyles;