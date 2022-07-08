import { useTheme } from '@config/theme';
import React, { FC, memo } from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';

interface Props {
  animating?: boolean;
  size?: 'large' | 'small';
}

const ActivityIndicator: FC<Props> = ({ animating, size = 'large' }) => {
  const { color } = useTheme();
  return <RNActivityIndicator animating={animating} color={color.primary} size={size} />;
};

export default memo(ActivityIndicator);
