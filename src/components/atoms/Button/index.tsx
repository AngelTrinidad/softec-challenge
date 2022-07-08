import { useTheme } from '@config/theme';
import React, { FC, memo } from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import Text from '../Text';
import styles from './styles';

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: FC<Props> = ({ onPress, style, textStyle, title }) => {
  const { color } = useTheme();

  const styleContainer: ViewStyle = {
    backgroundColor: color.primary,
  };

  return (
    <TouchableOpacity style={[styles.container, styleContainer, style]} onPress={onPress}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
