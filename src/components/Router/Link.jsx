// Link.jsx
import React from 'react';
import { useRouter } from '../../contexts/RouterContext';

export const Link = ({ to, children, className = '', state = {} }) => {
  const { navigate } = useRouter();
  
  return (
    <button
      onClick={() => navigate(to, state)}
      className={className}
    >
      {children}
    </button>
  );
};