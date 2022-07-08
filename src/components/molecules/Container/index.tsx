import { useTheme } from '@config/theme';
import React, { FC, memo, useMemo } from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ViewFlex from '../../atoms/ViewFlex';
import styles from './styles';

interface Props extends ViewProps {}

const Container: FC<Props> = ({ children, style, ...rest }) => {
  const { color, spaces } = useTheme();

  const themeStyles = useMemo(
    () => ({
      safeArea: { backgroundColor: color.background },
      container: {
        padding: spaces.paddingScreen,
        backgroundColor: color.background,
      },
    }),
    [color, spaces]
  );

  return (
    <SafeAreaView style={[themeStyles.safeArea, styles.safeArea]}>
      <ViewFlex style={[themeStyles.container, style]} {...rest}>
        {children}
      </ViewFlex>
    </SafeAreaView>
  );
};

export default memo(Container);
