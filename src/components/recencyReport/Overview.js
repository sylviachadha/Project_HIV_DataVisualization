import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from '../../../node_modules/react-plotly.js/react-plotly';  // Plotly Javascript Library
import axios from "axios"; // HTTP Client


function Overview() {

    const [hivData, setHivData] = React.useState([]);
    const [trendData, setTrendData] = React.useState([]);


    // axios is HTTP client
    useEffect(() => {
        axios.get('http://localhost:8080/python-new-hiv-cases').then(resp => {

            const respObj = JSON.parse(resp.data)
            setHivData(respObj.result);
        });
        axios.get('http://localhost:8080/python-trend-overview').then(resp => {

            const respObj = JSON.parse(resp.data)
            setTrendData(respObj.result);
        });

    }, []);


    return (
        <div>
            <Plot
                data={hivData}
                layout={{width: 500, height: 500, title: 'HIV Infection Percentage'}}
            />
            <Plot
                data={trendData}
                layout={{width: 500, height: 500, title: 'Trend Chart'}}
            />

        </div>
    );
}

export default Overview;