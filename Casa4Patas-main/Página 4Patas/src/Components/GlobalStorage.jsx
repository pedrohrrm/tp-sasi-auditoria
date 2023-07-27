import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [title, setTitle] = React.useState('');

  return (
    <GlobalContext.Provider value={{ title, setTitle }}>
      {children}
    </GlobalContext.Provider>
  );
};
