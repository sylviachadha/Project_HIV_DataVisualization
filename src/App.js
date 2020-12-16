import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TestingSite from "./components/TestingSite";
import TopMenu from "./components/TopMenu";
import VerticalMenu from "./components/VerticalMenu";
import {makeStyles} from "@material-ui/core/styles";
import rec_overview from "./components/recencyReport/Overview";
import demo_gender from "./components/demographic/Gender";
import demo_status from "./components/demographic/Status";
import demo_age from "./components/demographic/Age";
import behaviour_risk from "./components/behaviour/risk";
import geo_site from "./components/geographic/site";
import partner_hiv from "./components/partnertest/outcome";


const useStyles = makeStyles((theme) => ({

    verticalMenu: {
        display: "inline-block",
        position: "absolute",
        height: "100vh",
        width: "300px",
    },
    plots: {
        marginLeft:"20em",
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
                    <Route path="/overview" component={rec_overview} exact/>
                    <Route path="/by-gender" component={demo_gender} exact/>
                    <Route path="/by-status" component={demo_status} exact/>
                    <Route path="/by-age" component={demo_age} exact/>
                    <Route path="/by-risk" component={behaviour_risk} exact/>
                    <Route path="/by-site" component={geo_site} exact/>
                    <Route path="/by-outcome" component={partner_hiv} exact/>
                    <Route path="/" component={rec_overview}/>
                </Switch>
            </div>

        </BrowserRouter>
    );
}

export default App;
