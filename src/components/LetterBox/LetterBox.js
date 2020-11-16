import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 30px;
    width: 200px;
    height: 150px;
    font-size: 8rem;
    font-weight: bold;

    &--purple {
      background: linear-gradient(35deg, #72f, #c1b);
    }

    &--pink {
      background: linear-gradient(135deg, #bc4e9c, #c1b);
    }

    &--yellow {
      background: linear-gradient(135deg, #f7ff00, #db36a4);
    }

    &--blue {
      background: linear-gradient(135deg, #00b4db, #0083b0);
    }

    &--green {
      background: linear-gradient(135deg, #0c8, #0d6);
    }

    &--red {
      background: linear-gradient(135deg, #e52d27, #b31217);
    }
  }
`;

export const LetterBox = ({ color, children, ...props }) => {
  return (
    <Container>
      <motion.div
        className={cn({
          [`box box--${color}`]: color,
        })}
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.3,
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default LetterBox;
