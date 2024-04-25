import {StyleSheet} from 'react-native';

const buttonstyles = StyleSheet.create({
  buttonOutline: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 4,
    borderWidth: 0,
    backgroundColor: '#F1F1F1',
  },
  buttonSolid: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonOutlineText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '900',
  },
  buttonSolidText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '900',
  },
});

export const pressStyles = (variant: string) => {
  return variant === 'outline'
    ? {
        buttonStyles: buttonstyles.buttonOutline,
        textStyles: buttonstyles.buttonOutlineText,
      }
    : {
        buttonStyles: buttonstyles.buttonSolid,
        textStyles: buttonstyles.buttonSolidText,
      };
};
