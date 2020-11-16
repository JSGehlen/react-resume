import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarBox = styled(motion.nav)`
  border-top: 1px solid #232526;
  position: fixed;
  top: 100px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #181818;
  color: #fff;
  width: 0;
  overflow: hidden;
  z-index: 99;
`;

const LinksBox = styled(motion.ul)`
  width: 100%;
  height: 100vh;
  text-align: center;
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const LinkItem = styled(motion.li)`
  margin-bottom: 2rem;

  a {
    font-size: 28.12px;
    line-height: 47.122px;
    font-weight: bold;
  }

  &:nth-of-type(1) {
    background-color: #c71fb9;
    background: -webkit-linear-gradient(to top, #c71fb9, #c512c1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:nth-of-type(2) {
    background-color: #c512c1;
    background: linear-gradient(to top, #c512c1, #c100ca);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:nth-of-type(3) {
    background-color: #c100ca;
    background: linear-gradient(to top, #c100ca, #b600d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:nth-of-type(4) {
    background-color: #b600d6;
    background: linear-gradient(to top, #b600d6, #a607e4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:nth-of-type(5) {
    background-color: #a607e4;
    background: linear-gradient(to top, #a607e4, #9315f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:nth-of-type(6) {
    background-color: #9315f1;
    background: linear-gradient(to top, #9315f1, #7722ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const sidebarVariants = {
  sidebarOpen: {
    width: '100%',
  },

  sidebarClosed: {
    width: '',
  },
};

const LinkBoxVariants = {
  sidebarOpen: {
    opacity: 1,
  },
  sidebarClosed: {
    opacity: 0,
  },
};

const Sidebar = ({ open, handleClick }) => {
  return (
    <SidebarBox
      variants={sidebarVariants}
      animate={open ? 'sidebarOpen' : 'sidebarClosed'}
    >
      <LinksBox variants={LinkBoxVariants}>
        <LinkItem>
          <NavLink exact to='/' onClick={handleClick}>
            Home
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to='/about' onClick={handleClick}>
            About
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to='/skills' onClick={handleClick}>
            Skills
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to='/education' onClick={handleClick}>
            Education
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to='/workhistory' onClick={handleClick}>
            Work
          </NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to='/contact' onClick={handleClick}>
            Contact
          </NavLink>
        </LinkItem>
      </LinksBox>
    </SidebarBox>
  );
};

export default Sidebar;
