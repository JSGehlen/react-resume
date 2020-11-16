import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container } from '../../components/';
import HeroImage from './HeroImage';
import './Home.scss';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pageTransitions } from '../transitions';

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  text-align: center;
`;

export const Home = () => {
  const history = useHistory();

  return (
    <motion.div
      variants={pageTransitions}
      animate='in'
      initial='out'
      exit='out'
    >
      <Container color='dark'>
        <Wrapper>
          <HeroImage />
          <Button
            type='button'
            onClick={() => history.push('/about')}
            buttonStyle='btn--purple--solid'
            buttonSize='btn--medium'
          >
            Read More
          </Button>
        </Wrapper>
      </Container>
    </motion.div>
  );
};

export default Home;
