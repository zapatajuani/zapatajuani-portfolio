import React from "react";
import StudieExperience from "./studieExperience";
import { Timeline } from "@mui/lab"
import { timelineItemClasses } from '@mui/lab/TimelineItem';
/* ---------- IDIOMAS --------- */
import esData from '../languages/esData.json'
import enData from '../languages/enData.json'
import { useEffect, useState, useContext } from 'react';
import LanguageContext from '../context/languageContext';

function StudieTimeLine ({ themeMode }) {

  const context = useContext(LanguageContext)

  const [data, setData] = useState(esData)

  useEffect(() => {
    context.lan == 'es'?
    setData(esData):
    setData(enData)
  }, [context.lan])

  return(
    <Timeline
    sx={{
        paddingRight: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {
        Object.keys(data.estudios).map(
          (key, index) => {
            const isLast = index === Object.keys(data.estudios).length - 1
            return(
              <React.Fragment key={key}>
                <StudieExperience data={data.estudios[key]} separator={!isLast} lan={context.lan} mode={themeMode}/>
              </React.Fragment>
            )
          }
        ) 
      }
    </Timeline>
  )
}

export default StudieTimeLine
