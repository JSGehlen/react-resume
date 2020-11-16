import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ListItem = ({ children }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.li variants={item}>{children}</motion.li>
    </AnimatePresence>
  );
};
