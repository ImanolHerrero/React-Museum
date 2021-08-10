import React from 'react';
import './welcome.scss';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function welcome() {
    return (
        <div className="home-background">
            <h4>A 21th century approach...</h4>
            <h1>MUSEUM</h1>
            <p>See art completly free and online, forever!</p>
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
                endIcon={<SendIcon />}
            >
                Contact
            </Button>
        </div>
    )
}
