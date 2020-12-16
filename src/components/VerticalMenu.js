import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#364f6b',
        color: 'white',
        display: 'inline-block',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function VerticalMenu() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);


    const [openRecency, setOpenRecency] = React.useState(true);


    const handleRecencyClick = () => {
        setOpenRecency(!openRecency);
    };

    return (
        <List component="nav" className={classes.root}>

            <ListItem button onClick={handleRecencyClick}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Recency Report"/>
                {openRecency ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={openRecency} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component="a" href="/overview" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Overview"/>
                    </ListItem>

                </List>
            </Collapse>


            <ListItem button onClick={{}}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Demographic"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component="a" href="/by-gender" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Gender"/>
                    </ListItem>
                    <ListItem button component="a" href="/by-status" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Marital status"/>
                    </ListItem>
                    <ListItem button component="a" href="/by-age" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Age"/>
                    </ListItem>
                </List>
            </Collapse>


            <ListItem button onClick={{}}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Behaviour"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component="a" href="/by-risk" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Transmission Risk"/>
                    </ListItem>

                </List>
            </Collapse>

            <ListItem button onClick={{}}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Geographic"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Area"/>
                    </ListItem>
                    <ListItem button component="a" href="/by-site" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="By Testing Site"/>
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={{}}>
                <ListItemIcon>
                    <AssessmentIcon style={{color: '#fff'}}/>
                </ListItemIcon>
                <ListItemText primary="Partner Test"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component="a" href="/by-outcome" className={classes.nested}>
                        <ListItemIcon>
                            <PlayArrowIcon style={{color: '#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary="HIV Test Outcome"/>
                    </ListItem>
                </List>
            </Collapse>

        </List>
    );
}
