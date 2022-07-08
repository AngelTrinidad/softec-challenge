import { ActivityIndicator, Button, Text, ViewFlex } from '@components/atoms';
import React, { ReactNode, useCallback } from 'react';

import styles from './styles';

interface Props<T> {
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  data?: T;
  onReady: (data: T) => ReactNode;
}

function RequestStatusContent<T>({ isError, isLoading, onRetry, data, onReady }: Props<T>) {
  const renderContent = useCallback((): ReactNode => {
    if (isError) {
      return (
        <ViewFlex style={styles.centerContainer}>
          <Text style={styles.errorText}>There was an error.</Text>
          <Button title="Retry" onPress={onRetry} />
        </ViewFlex>
      );
    }

    if (isLoading || !data) {
      return (
        <ViewFlex style={styles.centerContainer}>
          <ActivityIndicator animating />
        </ViewFlex>
      );
    }

    return onReady(data);
  }, [isError, isLoading, onRetry, onReady, data]);

  return <ViewFlex>{renderContent()}</ViewFlex>;
}

export default RequestStatusContent;
