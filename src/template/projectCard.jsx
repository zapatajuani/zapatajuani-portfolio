import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import '../styles/projectCard.css'
/* --------------- ICONOS -------------- */
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CSSIcon,
    HTMLIcon,
    JsIcon,
    ReactIcon,
    PythonIcon
} from '../icons';

const iconGuide = {
    "html": <HTMLIcon />,
    "css": <CSSIcon />,
    "js": <JsIcon />,
    "react": <ReactIcon />
}

function ProjectCard ({ dicc, mode }) {
    return (
        <Card className='proyect-card-container' sx={{
            background: mode=='dark'?'#2F3236':'',
            width: "100%",
            boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        }}>
            <CardMedia
                sx={{ height: 140 }}
                image={dicc.img}
                title={dicc.titulo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {dicc.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {dicc.descripcion}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{display: 'flex', gap: "10px"}}>
                    {
                        dicc.tecnologias.map((item)=>{
                            return (
                                <React.Fragment key={item+dicc.titulo}>
                                    {iconGuide[item]}
                                </React.Fragment>
                            )
                        })
                    }
                </div>

                <div>
                    <IconButton href={dicc.url} target='_blank'>
                        <LinkIcon sx={{fontSize: "25px", color: mode=='dark'?'':'#000000'}}/>
                    </IconButton>
                    <IconButton href={dicc.github} target='_blank'>
                        <GitHubIcon sx={{fontSize: "25px", color: mode=='dark'?'':'#000000'}}/>
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
}

export default ProjectCard