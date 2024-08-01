import React from "react";
import ProjectCard from "./projectCard";
import '../styles/proyectos.css';
/* ---------- IDIOMAS --------- */
import esData from '../languages/esData.json'
import enData from '../languages/enData.json'
import { useEffect, useState, useContext } from 'react';
import LanguageContext from '../context/languageContext';

function Proyectos ({ themeMode }) {
    const context = useContext(LanguageContext)

    const [data, setData] = useState(esData)
  
    useEffect(() => {
      context.lan == 'es'?
      setData(esData):
      setData(enData)
    }, [context.lan])

    return (
        <div className="container-proyectos">
            {
                Object.keys(data.proyectos).map(
                    (item) => {
                        return(
                            <React.Fragment key={item}>
                                <ProjectCard dicc={data.proyectos[item]} mode={themeMode}/>
                            </React.Fragment>
                        )
                    }
                )
            }
        </div>
    );
}

export default Proyectos