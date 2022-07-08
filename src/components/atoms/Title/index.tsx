import React, { FC, memo } from 'react';
import { TextProps } from 'react-native';

import Text from '../Text';
import styles from './styles';

interface Props extends TextProps {}

const Title: FC<Props> = ({ style, ...rest }) => {
  return <Text style={[styles.title, style]} {...rest} />;
};

export default memo(Title);
