import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Page({ params }: { params: { mansion: string } }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {params.mansion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is the test page for the mansion house: {params.mansion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}