import React, { createContext, useContext, useRef } from 'react';
import { Toast } from 'primereact/toast';

// cria um contexto chamado ToastContext
const ToastContext = createContext();

// componente toastProvider que fornece a função showToast
export const ToastProvider = ({ children }) => {
  const toastRef = useRef(null);

  // funcao showToast para exibir toasts
  const showToast = (options) => {
    toastRef.current.show(options);
  };

  // fornece o contexto ToastContext.Provider com a funcao showToast e o componente Toast
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast ref={toastRef} className='w-11/12' />
    </ToastContext.Provider>
  );
};

// hook useToast para obter a funcao showToast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
