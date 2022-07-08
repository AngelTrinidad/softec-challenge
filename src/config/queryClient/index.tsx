import React, { FC } from 'react';
import { QueryClientProvider, QueryClientProviderProps } from 'react-query';

import { useQueryClient } from './customQueryClient';

interface Props extends Omit<QueryClientProviderProps, 'client'> {}

const CustomQueryClientProvider: FC<Props> = ({ children, ...rest }) => {
  const client = useQueryClient();

  return (
    <QueryClientProvider {...rest} client={client}>
      {children}
    </QueryClientProvider>
  );
};

export default CustomQueryClientProvider;
