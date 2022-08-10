import React from 'react';
import { Wrapper } from './styles';
import { IButton } from './types';

export const Button: React.FC<IButton> = ({
  fontSize,
  onClick,
  disabled,
  children,
}) => {
  return (
    <Wrapper disabled={disabled} fontSize={fontSize} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
