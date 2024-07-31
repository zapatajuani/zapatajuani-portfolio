import { Container, IconButton } from "@mui/material";
import Titulo from "./titulo";
import TimeLine from "./timeLine";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Proyectos from "./proyectos";
import Divider from '@mui/material/Divider';
/* ------- ICONOS --------- */
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import EsIcon from "../icons/esIcon";
import EnIcon from "../icons/enIcon";
/* ------- CONTEXTO-------- */
import { useContext } from "react";
import LanguageContext from "../context/languageContext";


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
      <Container >
        <Container>

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
        <Titulo />
        <br />
        <Divider />
        <br />
        <h1>{lan=='es'?"Experiencia":"Experiencie"}</h1>
        <TimeLine />
        <br />
        <h1>{lan=='es'?"Proyectos":"Proyects"}</h1>
        <Proyectos />

      </Container>
    </ThemeProvider>
  )
}

export default Portfolio
