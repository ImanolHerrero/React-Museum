import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './cards.scss';
import VanGogh from '../assets/starry-night.jpg';
import Rembrandt from '../assets/the-storm-of-the-sea-of-galilee.jpg';


export default function ImgMediaCard() {
    return (
        <div className="art-card-container">
            <Card className="art-card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="180"
                        image={VanGogh}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Starry Night
                        </Typography>
                        <Typography gutterBottom component="subtitle1">
                            Vincent van Goghg
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean mattis orci ut nunc vulputate, at gravida nibh rutrum.
                            Nullam sollicitudin aliquam leo fermentum tincidunt.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="buttons">
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>

            <Card className="art-card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="180"
                        image={Rembrandt}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            The storm of the sea of Galilee
                        </Typography>
                        <Typography gutterBottom component="subtitle1">
                            Rembrandt
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean mattis orci ut nunc vulputate, at gravida nibh rutrum.
                            Nullam sollicitudin aliquam leo fermentum tincidunt.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="buttons">
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
