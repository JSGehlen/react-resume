import React from 'react';
import './Button.scss';
import { motion } from 'framer-motion';

const STYLES = [
  'btn--pink--solid',
  'btn--purple--solid',
  'btn--yellow--solid',
  'btn--blue--solid',
  'btn--green--solid',
  'btn--red--solid',
  'btn--purple--outline',
  'btn--yellow--outline',
  'btn--blue--outline',
  'btn--green--outline',
  'btn--red--outline',
];

const SIZES = [
  'btn--medium',
  'btn--small',
  'btn--flex--medium',
  'btn--flex--small',
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <motion.button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
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
    >
      {children}
    </motion.button>
  );
};
