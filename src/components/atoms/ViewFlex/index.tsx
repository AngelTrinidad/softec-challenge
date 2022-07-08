import React, { FC, memo } from 'react';
import { View, ViewProps } from 'react-native';

import styles from './styles';

const ViewFlex: FC<ViewProps> = ({ style, children, ...rest }) => {
  return (
    <View style={[styles.view, style]} {...rest}>
      {children}
    </View>
  );
};

export default memo(ViewFlex);
