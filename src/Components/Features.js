import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Features() {
  return (
    <div className='features-container'>
        <br/>
        <h2>Features </h2>
        <br/>
      <div className="features-main gap-3">
        {/* Card 1 */}
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://iili.io/3xsMHzu.md.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Relationship Insights
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Gain deep astrological insights into love and marriage to understand your
                 relationship dynamics and build a harmonious life together.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://iili.io/3xsM3qx.md.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Career & Wealth Predictions
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Understand your career prospects, business growth, and financial opportunities based on astrological calculations.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://iili.io/3xsGZ0l.md.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lal Kitab-Based Predictions
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Receive unique Lal Kitab predictions on demand, helping you understand how planetary influences shape different aspects of life.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://iili.io/3xsGm57.md.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Numerology Insights
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Unlock the power of numbers with personalized numerology reports, including your life path, destiny, and lucky numbers.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://iili.io/3xsGtg2.md.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Personalized Analysis
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Uncover deep personal insights with numerology and Lal Kitab astrology to navigate life’s challenges and unlock your true potential.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://iili.io/3xsGbJS.md.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                AI-Powered Insights
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Interact with an intelligent chatbot that answers astrology-related queries instantly, giving you expert insights anytime.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      </div>
    </div>
  )
}
