import JobExperience from "./jobExperience"
import { Timeline } from "@mui/lab"
import { timelineItemClasses } from '@mui/lab/TimelineItem';
/* ---------- IDIOMAS --------- */
import esData from '../languages/esData.json'
import enData from '../languages/enData.json'
import { useEffect, useState, useContext } from 'react';
import LanguageContext from '../context/languageContext';

function TimeLine () {

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
      <JobExperience data={data.experiencia.exp1} separator={true} />
      <JobExperience data={data.experiencia.exp2} separator={false} />
    </Timeline>
  )
}

export default TimeLine
