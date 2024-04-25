import React, {ButtonHTMLAttributes} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {pressStyles} from '../../styles/button.styles';

type ButtonViewProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'outline' | 'solid';
  title: string;
};

const ButtonView = ({variant, title}: ButtonViewProps) => {
  const pressableStyles = pressStyles(variant);
  return (
    <TouchableOpacity
      style={pressableStyles.buttonStyles}
      onPress={() => console.log('jaine')}>
      <Text style={pressableStyles.textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonView;
