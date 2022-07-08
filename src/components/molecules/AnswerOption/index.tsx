import { TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC, memo, useCallback } from 'react';
import { ChallengeAnswer } from '@interfaces/challenge';
import { Text } from '@components';
import styles from './styles';

interface Props {
  value: ChallengeAnswer;
  onPress?: (value: number) => void;
  style?: ViewStyle;
}

const AnswerOption: FC<Props> = ({ value, onPress, style }) => {
  const handlePress = useCallback(() => onPress?.(value.number), [onPress, value]);

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress}>
      <Text>{value.text}</Text>
    </TouchableOpacity>
  );
};

export default memo(AnswerOption);
