// Route.jsx
import React from 'react';
import { useRouter } from '../../contexts/RouterContext';

export const Route = ({ path, element }) => {
  const { currentPath } = useRouter();
  
  // Manejo de rutas dinámicas como /product/:id
  const pathPattern = path.replace(/:\w+/g, '([^/]+)');
  const regex = new RegExp(`^${pathPattern}$`);
  
  if (regex.test(currentPath)) {
    return element;
  }
  
  return null;
};

