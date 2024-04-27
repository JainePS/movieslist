import React, {ButtonHTMLAttributes} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonViewProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'outline' | 'solid';
  label: string;
  onButtonPress: () => void;
};

const ButtonView = ({variant, label, onButtonPress}: ButtonViewProps) => {
  const pressableStyles = pressStyles(variant);
  return (
    <TouchableOpacity
      style={pressableStyles.buttonStyles}
      onPress={onButtonPress}>
      <Text style={pressableStyles.textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

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
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 4,
    borderWidth: 0,
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

const pressStyles = (variant: string) => {
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

export default ButtonView;
