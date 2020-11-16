import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuToggle } from './MenuToggle';
import Sidebar from './Sidebar';
import Typography from '../Typography/Typography';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: #181818;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0 2rem;
  box-shadow: 0 16px 32px -16px rgba(0, 0, 0, 0.4);

  h2 {
    margin-left: auto;
    margin-right: auto;
    cursor: default;
  }
`;

const Home = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
  font-size: 2rem;
  background: #232526;
  border-radius: 1rem;

  a {
    align-content: center;
    display: flex;
    justify-content: center;
  }
`;

export default function Navigation({ title, color }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Home>
        <Link to='/'>
          <AiOutlineHome />
        </Link>
      </Home>
      <Typography variant='h2' color={color}>
        {title}
      </Typography>
      <MenuToggle handleClick={handleClick}></MenuToggle>
      <Sidebar open={open} handleClick={handleClick} />
    </Wrapper>
  );
}
