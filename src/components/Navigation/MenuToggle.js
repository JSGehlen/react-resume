import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HamburgerContainer = styled(motion.div)`
  width: 4rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  cursor: pointer;
  z-index: 999;
  direction: rtl;
  background: #232526;
  border-radius: 1rem;
`;

const Line = styled(motion.div)`
  background-color: #fff;
  width: ${({ width }) => `${width}px`};
  height: 2px;
  margin: 0.2rem 1rem;
  border-radius: 8px;
`;

export const MenuToggle = ({ open, handleClick }) => {
  return (
    <HamburgerContainer onClick={handleClick}>
      <Line width={18} />
      <Line width={16} />
      <Line width={14} />
    </HamburgerContainer>
  );
};
