import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './template/portfolio'
import LanguageContext from './context/languageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <LanguageContext.Provider value={{
      lan: "en"
    }}>
      <Portfolio />
    </LanguageContext.Provider>
)
