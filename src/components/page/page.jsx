import React, { useState, useEffect } from 'react'; // React, useState, and useEffect
import { motion, AnimatePresence } from 'framer-motion'; // motion and AnimatePresence from framer-motion
import { veggiePages } from '../../data/veggieData';
import ItemCard from '../ItemCard/ItemCard';

const variants = {
  visible: (i) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
  hidden: { y: 10, x: 0, opacity: 1 },
};






 export default function Page({ currPage }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target.tagName !== 'BUTTON') {
      setSelectedCard(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setSelectedCard(null);
  }, [currPage]);

  return (
    <ul className="relative w-full h-80">
      <AnimatePresence>
        {veggiePages[currPage].vegetables.map(({ name, fact }, index) => {
          return (
            <motion.li
              key={name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={variants}
            >

              
               <ItemCard
                setSelectedIdx={setSelectedCard}
                selectedIdx={selectedCard}
                index={index}
                name={name}
                funFact={fact}
              /> 
              
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}
