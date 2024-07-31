import profilePic from '../assets/foto-presentacion.jpeg'
/* ---------- IDIOMAS --------- */
import esData from '../languages/esData.json'
import enData from '../languages/enData.json'
import { useEffect, useState, useContext } from 'react';
import LanguageContext from '../context/languageContext';
import ResumeBoton from './resumeBoton';

const enResumeURL = "https://docs.google.com/document/d/1_Aes68puU_E23T-zarKSx5l16QHNcAskswpSn3KwjNU/edit?usp=sharing"
const esResumeURL = "https://docs.google.com/document/d/1nO7uOtEymXCU2EK17USbQwbCbzDcyglD3SHFKC0-JVs/edit?usp=sharing"

function Titulo() {

  const context = useContext(LanguageContext)

  const [data, setData] = useState(esData)
  const [href, setHref] = useState(enResumeURL)

  useEffect(() => {

    if (context.lan == 'es') {
      setHref(esResumeURL)
      setData(esData)
    } else {
      setHref(enResumeURL)
      setData(enData)
    }

  }, [context.lan])


  return (
    <div className="divisor titulo">
      <div>
        <img id="foto-perfil" src={profilePic} alt="Foto-perfil"/>
      </div>
      <div>
        <h1>{data.titulo.titulo}</h1>
        <h3>{data.titulo.subtitulo}</h3>
      </div>
      <div><p>
        {data.titulo.descripcion}
      </p></div>
      <div>
        <ResumeBoton url={href}/>
      </div>
    </div>
  )
}

export default Titulo
