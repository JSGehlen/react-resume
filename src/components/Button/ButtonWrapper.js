import React from 'react';
import './Button.scss';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem 0;

  button:nth-of-type(1) {
    margin-right: 0.5rem;
  }
  button:nth-of-type(2) {
    margin-left: 0.5rem;
  }
`;

export const ButtonWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
