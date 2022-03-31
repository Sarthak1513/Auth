import React from 'react';
import AuthContextProvider from './src/Contexts/AuthContextProvider';
import AppRouter from './src/Navigation/AppRouter';

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
