import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
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
import Picasso from '../assets/guernica.jpg';
import daVinci from '../assets/mona-lisa.jpg';
import Hokusai from '../assets/great-wave.jpg';
import Cezanne from '../assets/apple.jpg';
import Monet from '../assets/magpie.jpg';

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
                    <Button variant="outlined" size="small" color="primary">
                        <ShareIcon size="small" color="primary" />
                    </Button>
                    <Button variant="contained" size="small" color="primary">
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
                    <Button variant="outlined" size="small" color="primary">
                        <ShareIcon size="small" color="primary" />
                    </Button>
                    <Button variant="contained" size="small" color="primary">
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
                        image={Picasso}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Guernica
                        </Typography>
                        <Typography gutterBottom component="subtitle1">
                            Pablo Picasso
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean mattis orci ut nunc vulputate, at gravida nibh rutrum.
                            Nullam sollicitudin aliquam leo fermentum tincidunt.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="buttons">
                    <Button variant="outlined" size="small" color="primary">
                        <ShareIcon size="small" color="primary" />
                    </Button>
                    <Button variant="contained" size="small" color="primary">
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
                        image={daVinci}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Mona Lisa
                        </Typography>
                        <Typography gutterBottom component="subtitle1">
                            Leonardo da Vinci
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean mattis orci ut nunc vulputate, at gravida nibh rutrum.
                            Nullam sollicitudin aliquam leo fermentum tincidunt.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="buttons">
                    <Button variant="outlined" size="small" color="primary">
                        <ShareIcon size="small" color="primary" />
                    </Button>
                    <Button variant="contained" size="small" color="primary">
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
                        image={Hokusai}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            The Great Wave off Kanagawa
                        </Typography>
                        <Typography gutterBottom component="subtitle1">
                            Katsushika Hokusai
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean mattis orci ut nunc vulputate, at gravida nibh rutrum.
                            Nullam sollicitudin aliquam leo fermentum tincidunt.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="buttons">
                    <Button variant="outlined" size="small" color="primary">
                        <ShareIcon size="small" color="primary" />
                    </Button>
                    <Button variant="contained" size="small" color="primary">
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
                        image={Monet}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            The Magpie
                        </Typography>
                        <Typography gutterBottom component="subtitle1">
                            Claude Monet
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean mattis orci ut nunc vulputate, at gravida nibh rutrum.
                            Nullam sollicitudin aliquam leo fermentum tincidunt.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="buttons">
                    <Button variant="outlined" size="small" color="primary">
                        <ShareIcon size="small" color="primary" />
                    </Button>
                    <Button variant="contained" size="small" color="primary">
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
                        image={Cezanne}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            The Basket of Apples
                        </Typography>
                        <Typography gutterBottom component="subtitle1">
                            Paul Cézanne
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean mattis orci ut nunc vulputate, at gravida nibh rutrum.
                            Nullam sollicitudin aliquam leo fermentum tincidunt.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="buttons">
                    <Button variant="outlined" size="small" color="primary">
                        <ShareIcon size="small" color="primary" />
                    </Button>
                    <Button variant="contained" size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
