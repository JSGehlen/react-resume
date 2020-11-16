import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../components/';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  font-size: 10rem;
  margin: 3rem 0;
  background: linear-gradient(35deg, #72f, #c1b);

  .item {
    width: 50%;
    overflow: visible;
    stroke: #fff;
    stroke-width: 0.5;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
`;

export const HeroImage = () => {
  return (
    <Container>
      <Box
        animate={{
          opacity: [0, 1, 1, 1, 1],
          transition: {
            duration: 4,
          },
          rotate: [0, 0, 360, 360, 360],
          scale: [0.8, 0.8, 0.8, 1, 1],
          borderRadius: ['20%', '20%', '50%', '100%', '100%'],
        }}
      >
        <motion.svg
          fill='currentColor'
          stroke-width='0'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          className='item'
        >
          <motion.path
            d='M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z'
            variants={icon}
            initial='hidden'
            animate='visible'
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 1, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
      </Box>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: [0, 1],
            transition: {
              duration: 1,
              delay: 0.4,
            },
          },
        }}
      >
        <Typography variant='h1'>
          Developer{' '}
          <Typography variant='span' color='pink'>
            Resume
          </Typography>
        </Typography>
      </motion.div>
    </Container>
  );
};

export default HeroImage;
