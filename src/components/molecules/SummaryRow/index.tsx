import { View, ViewStyle } from 'react-native';
import React, { FC, memo, useMemo } from 'react';
import styles from './styles';
import { Text } from '@components/atoms';
import { useTheme } from '@config/theme';

interface Props {
  isCorrect: boolean;
  challengeText: string;
  style?: ViewStyle;
}

const SummaryRow: FC<Props> = ({ isCorrect, challengeText, style }) => {
  const { color } = useTheme();

  const themeStyles = useMemo(
    () => ({
      true: {
        color: color.success,
      },
      false: {
        color: color.error,
      },
    }),
    [color]
  );

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.result, themeStyles[`${isCorrect}`]]}>{isCorrect ? '+' : '-'}</Text>
      <Text style={styles.challengeText}>{challengeText}</Text>
    </View>
  );
};

export default memo(SummaryRow);
