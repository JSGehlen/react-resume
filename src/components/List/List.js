import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const List = ({ children }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.ul variants={container} initial='hidden' animate='show'>
        {children}
      </motion.ul>
    </AnimatePresence>
  );
};
