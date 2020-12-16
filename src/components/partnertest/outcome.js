import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from 'react-plotly.js';  // Plotly Javascript Library
import axios from "axios"; // HTTP Client
import Grid from "@material-ui/core/Grid";


function Partner() {


    const [phivData, setPhivData] = React.useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/python-partnerHiv').then(resp => {

            const respObj = JSON.parse(resp.data)
            setPhivData(respObj.result);
        });


    }, []);


    return (
        <div>
            <Plot
                data={phivData}
                layout={{width: 500, height: 500, title: 'HIV Test Outcome'}}
            />

        </div>
    );
}

export default Partner;