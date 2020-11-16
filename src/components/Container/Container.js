import React from 'react';
import cn from 'classnames';
import './Container.scss';
import { motion } from 'framer-motion';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const Container = ({ color, children, ...props }) => {
  return (
    <motion.div
      transition={transition}
      className={cn({
        [`container container--${color}`]: color,
      })}
      {...props}
    >
      {children}
    </motion.div>
  );
};
