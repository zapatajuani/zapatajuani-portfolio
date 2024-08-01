import { Container, IconButton } from "@mui/material";
import Titulo from "./titulo";
import JobTimeLine from "./jobTimeLine";
import StudieTimeLine from "./studiesTimeLine";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Proyectos from "./proyectos";
import Divider from '@mui/material/Divider';
/* ------- ICONOS --------- */
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { EnIcon, EsIcon } from "../icons";
/* ------- CONTEXTO-------- */
import { useContext } from "react";
import LanguageContext from "../context/languageContext";
/* ------- ANIMACION ------- */
import { motion, AnimatePresence } from 'framer-motion';

const PageChangeMode = ({ mode, children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode == darkTheme ? 'dark' : 'light'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#1D2835"
    },
    text: {
      primary: "#f0f0f0"
    }
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  },
});

function Portfolio() {
  const context = useContext(LanguageContext)

  const [mode, setMode] = useState(darkTheme)
  const [lan, setLan] = useState(context.lan)

  function setCurrentLan () {
    if (lan == 'es') {
      setLan('en')
      context.lan = 'en'
    } else {
      setLan('es')
      context.lan = 'es'
    }
  }
  
  function setThemeMode () {
    mode == darkTheme?
    setMode(lightTheme):
    setMode(darkTheme) 
  }

  return (
    <ThemeProvider theme={mode}>
      <CssBaseline />
      <PageChangeMode mode={mode}>
        <Container >
          <Container disableGutters sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignContent: 'center'
          }}>

            <IconButton
            onClick={setThemeMode}>
              {
                mode == darkTheme?
                <WbSunnyOutlinedIcon />:
                <DarkModeOutlinedIcon />
              }
            </IconButton>

            <IconButton
            onClick={setCurrentLan}>
              {
                lan == 'es'?
                <EnIcon /> :
                <EsIcon />
              }
            </IconButton>

          </Container>
          <br />
          <Titulo themeMode={mode == darkTheme?'dark':'light'}/>
          <br />
          <Divider />
          <br />
          <h1>{lan=='es'?"Experiencia":"Experiencie"}</h1>
          <JobTimeLine />
          <br />
          <h1>{lan=='es'?"Proyectos":"Projects"}</h1>
          <br />
          <Proyectos themeMode={mode == darkTheme?'dark':'light'}/>
          <br />
          <h1>{lan=='es'?"Educacion":"Education"}</h1>
          <StudieTimeLine themeMode={mode == darkTheme?'dark':'light'}/>

        </Container>
      </PageChangeMode>
    </ThemeProvider>
  )
}

export default Portfolio
