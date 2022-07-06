import React from 'react';
import {AppRouter} from './routers';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <AppRouter />
    </PaperProvider>
  );
};

export default App;
