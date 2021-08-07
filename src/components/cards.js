import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VanGogh from '../assets/starry-night.jpg';
import Cards from './cards.scss';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <div className="art-card">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={VanGogh}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Starry Night
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean mattis orci ut nunc vulputate, at gravida nibh rutrum.
                            Nullam sollicitudin aliquam leo fermentum tincidunt.
                            Ut elementum pulvinar nunc ac faucibus.
                            Praesent imperdiet turpis orci, eu.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
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
