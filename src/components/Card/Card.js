import React from 'react';
import cn from 'classnames';
import './Card.scss';
import { motion } from 'framer-motion';

export const Card = ({ color, children, ...props }) => {
  return (
    <motion.div
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
            delay: 0.2,
          },
        },
      }}
      className={cn({
        [`card card--${color}`]: color,
      })}
      {...props}
    >
      {children}
    </motion.div>
  );
};
