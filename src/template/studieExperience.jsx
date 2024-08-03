import * as React from 'react';
import { useState } from 'react';
import { Card, Button, Typography, Box, Modal, Divider } from '@mui/material';
import '../styles/studieExperience.css'
import {
    TimelineItem,
    TimelineDot,
    TimelineSeparator,
    TimelineContent,
    TimelineConnector
} from '@mui/lab';
import { motion, AnimatePresence } from 'framer-motion';
import AttachFileIcon from '@mui/icons-material/AttachFile';

function AnimatedIcon({ isHovered }) {
  return (
    <AnimatePresence mode='wait'>
      {isHovered && (
      <motion.div
        initial={{ opacity: 0, rotate: 0 }} // Estado inicial (oculto)
        animate={{ opacity: 1, rotate: 450 }} // Animación al aparecer
        exit={{ opacity: 0, rotate: 0 }}
        transition={{ duration: 0.5 }} // Duración de la transición
        style={{ display: 'inline-block' }} // Asegura que el contenedor sea inline-block
      >
        <AttachFileIcon />
      </motion.div>
      )}
    </AnimatePresence>

  )
}

function MyModal({ handleClose, open, img }) {

  return(
      <Modal
        open={open}
        onClose={handleClose}
      >
        <motion.img
        initial={{ opacity: 0}} // Estado inicial (oculto)
        animate={{ opacity: 1}} // Animación al aparecer
        transition={{ duration: 0.5 }} // Duración de la transición
        src={img} alt="diploma" className='box-style'/>
      </Modal>
  )
}


function StudieExperience({ data, separator = true, lan, mode }) {

  const skillStyle = {
    background: mode=='dark'?'#2F3236':'',
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    height: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
    handleMouseState()
  }
  const handleClose = () => setOpen(false)

  const [onElement, setOnElement] = useState(false)

  function handleMouseState() {
    setOnElement(!onElement)
  }

  return (
      <TimelineItem className='timeline-container estudio' onMouseEnter={handleMouseState} onMouseLeave={handleMouseState}>
        <TimelineSeparator>
          <TimelineDot className='timeline-connector'/>
          {separator ? <TimelineConnector className='timeline-connector'/> : null}
        </TimelineSeparator>
        <TimelineContent sx={{paddingRight: 0}}>
          <div className='content-divisor titulo'>
            <p className='main-tittle'>{data.institucion}</p>
            <p className='secondary-tittle'>{data.lugar}</p>
          </div>
          <div className='content-divisor titulo'>
            <div className={
              data.certificado.state?
              'main-tittle certificado-active':
              'main-tittle certificado'
            }
            onClick={data.certificado.state?handleOpen:null}
            >
              {data.titulo}
              {data.certificado.state && (<AnimatedIcon isHovered={onElement}/>)}
            </div>
            <p className='secondary-tittle'>{data.tiempo}</p>
          </div>
          <div className='content'>
            <p className='timeline-container estudio skill-tittle'>
              {
                lan=='es'?
                'Conocimiento relevante':
                'Relevant knowledge and skills'
              }
            </p>
            <Divider />
            <div className='timeline-container estudio skill-grid-layout'>
              {
                data.conocimientos.map(
                  (item) => {
                    return(
                      <React.Fragment key={item+data.titulo}>
                        <Card sx={skillStyle}>{item}</Card>
                      </React.Fragment>
                    )
                  })
              }
            </div>
          </div>
        </TimelineContent>
        <MyModal handleClose={handleClose} open={open} img={data.certificado.url}/>
      </TimelineItem>
  )
}

export default StudieExperience