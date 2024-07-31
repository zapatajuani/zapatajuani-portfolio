import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import { Button } from '@mui/material'
/* ------- CONTEXTO-------- */
import { useContext } from "react";
import LanguageContext from "../context/languageContext";

function ResumeBoton ({ url }) {
  const context = useContext(LanguageContext)

  return(
    <Button variant="outlined" href={url} target='_blank' sx={{
      width: 130,
      fontWeight: 900,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1.5
    }}>
      <ContactPageOutlinedIcon />
      {context.lan=='es'?"CV":"Resume"}
    </Button>
  )
}

export default ResumeBoton
