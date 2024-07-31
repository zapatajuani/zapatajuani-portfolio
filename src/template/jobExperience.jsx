import * as React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineDot,
    TimelineSeparator,
    TimelineContent,
    TimelineConnector
} from '@mui/lab';

function JobExperience({ id, data, separator = true }) {
    return (
        <TimelineItem className='timeline-container'>
          <TimelineSeparator>
            <TimelineDot className='timeline-connector'/>
            {separator ? <TimelineConnector className='timeline-connector'/> : null}
          </TimelineSeparator>
          <TimelineContent sx={{paddingRight: 0}}>
            <div className='content-divisor titulo'>
              <p className='main-tittle'>{data.empresa}</p>
              <p className='secondary-tittle'>{data.lugar}</p>
            </div>
            <div className='content-divisor titulo'>
              <p className='main-tittle'>{data.puesto}</p>
              <p className='secondary-tittle'>{data.tiempo}</p>
            </div>
            <p className='content'>{data.experiencia}</p>
          </TimelineContent>
        </TimelineItem>
    )
}

export default JobExperience