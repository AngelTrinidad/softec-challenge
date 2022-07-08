import { useTheme } from '@config/theme';
import React, { FC, memo, useMemo } from 'react';
import { Text as RNText, TextProps } from 'react-native';

import styles from './styles';

const Text: FC<TextProps> = ({ style, children, ...rest }) => {
  const { color } = useTheme();

  const textStyle = useMemo(
    () => ({
      color: color.text,
    }),
    [color]
  );

  return (
    <RNText style={[textStyle, styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default memo(Text);
