import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import NewHivDiagnosis from "./components/NewHivDiagnosis";
import Demographic from "./components/Demographic";
import Partner from "./components/Partner";
import TopMenu from "./components/TopMenu";
import HotspotLocations from "./components/HotspotLocations";


function App() {
    return (
        <BrowserRouter>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TopMenu/>
                </Grid>
            </Grid>
            <Switch>
                {/*/new-hiv is link, if u click on this link NewHivDiagnosis Page will open*/}
                <Route path="/new-hiv" component={NewHivDiagnosis}/>
                <Route path="/demographic" component={Demographic}/>
                <Route path="/partner" component={Partner}/>
                <Route path="/hotspot" component={HotspotLocations}/>
                <Route path="/" component={Demographic}/>


            </Switch>


        </BrowserRouter>
    );
}

export default App;
