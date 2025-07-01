import { StyleSheet } from 'react-native';
import cores from 'src/themes/cores';
import fonts from 'src/themes/fonts';
import metrics from 'src/themes/metricas';

const globalStyles = StyleSheet.create({
  container: {
    padding: metrics.paddingContainner
  },
  screenPrincipal: {
    flex: 1,
    backgroundColor: cores.background
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover'
  },
  title: {
    fontSize: fonts.size.xlarge,
    fontFamily: fonts.family.normal,
    color: cores.text_primary,
  },
  text: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.normal,
    color: cores.text_primary,
  },
  button: {
    backgroundColor: cores.primary,
    padding: metrics.padding,
    borderRadius: metrics.borderRadius,
    alignItems: 'center',
  },
  buttonText: {
    color: cores.text_button,
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.normal,
  },
  input: {
    backgroundColor: cores.input_background,
    borderWidth: 1,
    borderColor: cores.input_border,
    padding: 10,
    borderRadius: 8,
    color: cores.text_primary
  },
  label: { 
    display: 'flex',
    fontFamily: fonts.family.label,
    fontWeight: '400',
    color: cores.text_primary
  },
  mini_label: { 
    display: 'flex',
    fontFamily: fonts.family.label,
    fontWeight: '400',
    color: cores.text_primary,
    fontSize: fonts.size.minSmall
  },
});

export default globalStyles;