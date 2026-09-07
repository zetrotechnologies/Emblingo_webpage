import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClass = styles.btn;
  const variantClass = styles[`btn-${variant}`] || styles['btn-primary'];
  
  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
