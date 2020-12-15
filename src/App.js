import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TestingSite from "./components/TestingSite";
import TopMenu from "./components/TopMenu";
import VerticalMenu from "./components/VerticalMenu";
import {makeStyles} from "@material-ui/core/styles";
import Overview from "./components/Overview";

const useStyles = makeStyles((theme) => ({
    verticalMenu: {
        display: "inline-block",
        height: "100%",
        width: "300px",
    },
    plots: {
        display: "inline-block",
    }
}));

function App() {
    const classes = useStyles();


    return (
        <BrowserRouter>

            <TopMenu/>

            <div className={classes.verticalMenu}>
                <VerticalMenu/>
            </div>


            <div className={classes.plots}>
                <Switch>
                    {/*/new-hiv is link, if u click on this link TestingSite Page will open*/}
                    <Route path="/overview" component={Overview} exact/>
                    <Route path="/by-site" component={TestingSite} exact/>
                    <Route path="/" component={Overview}/>
                </Switch>
            </div>

        </BrowserRouter>
    );
}

export default App;
