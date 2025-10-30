import React, { useState, createContext, useContext } from 'react';

// Context para el Router
export const RouterContext = createContext();

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter debe usarse dentro de Router');
  return context;
};

export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/');
  const [params, setParams] = useState({});

  const navigate = (path, state = {}) => {
    setCurrentPath(path);
    setParams(state);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
};