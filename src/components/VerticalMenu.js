import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder  from '@material-ui/icons/StarBorder';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import { white } from '@material-ui/core/colors';
import {Link} from "react-router-dom";


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

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="nav"  className={classes.root}>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon style={{ color: '#fff' }}/>
                </ListItemIcon>
                <ListItemText primary="Recency Report" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button component="a" href="/overview" className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Overview" />
                    </ListItem>
                    <ListItem button component="a" href="/by-site" className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="By testing sites" />
                    </ListItem>
                </List>
            </Collapse>


            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Demographic" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="By gender" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="By marital status" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="By age" />
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button>
                <ListItemIcon>
                    <InboxIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Behaviour" />
            </ListItem>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Geographic" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="By Area" />
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Partner" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder style={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Recency Test" />
                    </ListItem>
                </List>
            </Collapse>

        </List>
    );
}
