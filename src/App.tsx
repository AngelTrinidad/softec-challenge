import QueryClientProvider from '@config/queryClient';
import { ThemeProvider } from '@config/theme';
import { ChallengeProvider } from '@contexts/challenge';
import Navigation from '@navigation';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <ChallengeProvider>
          <Navigation />
        </ChallengeProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
