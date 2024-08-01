import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import Portfolio from './template/portfolio'
import LanguageContext from './context/languageContext'

import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageContext.Provider value={{
    lan: "en"
  }}>
    <PageTransition>
      <Portfolio />
    </PageTransition>
  </LanguageContext.Provider>
)
