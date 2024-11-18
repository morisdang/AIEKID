import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import doremon from '../../../assests/doremon.jpg'
export default function CardGame({eventInfo}) {

    const  hanleClick =() => {
        
    }

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={doremon}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {eventInfo.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
          {eventInfo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/event/${eventInfo.eventId}/pin`}>
            <Button onClick={hanleClick} size="small">Play</Button>
        </Link>

        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
