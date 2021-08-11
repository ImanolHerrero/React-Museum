import React from 'react';
import './welcome.scss';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Typography from '@material-ui/core/Typography';
import illustration from "../assets/illustration.svg";
import Fade from 'react-reveal/Fade';

export default function welcome() {
    return (
        <div className="home-background">
            <div className="image-container">
                <Fade bottom duration={1500}>
                    <img src={illustration} alt="" />
                </Fade>
            </div>
            <div className="text-container">
                <Typography variant="subtitle1">
                    A 21th century approach...
                </Typography>
                <Typography variant="h2" color="primary">
                    MUSEUM
                </Typography>
                <Typography variant="subtitle1">
                    See art completly free and online, forever!
                </Typography>
                <Button className="button"
                    variant="contained"
                    color="primary"
                    endIcon={<VisibilityIcon />}
                >
                    See now
                </Button>
                <Button className="button"
                    variant="contained"
                    color="secondary"
                    endIcon={<SendIcon color="primary" />}
                >
                    Contact
                </Button>
            </div>
        </div>
    )
}
