import React from 'react';
import * as S from './styles';

const Button = ({ children, rest }) => (
  <S.ButtonWrapper type="button" {...rest}>
    {children}
  </S.ButtonWrapper>
);

export default Button;
