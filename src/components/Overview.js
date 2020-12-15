import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from 'react-plotly.js';  // Plotly Javascript Library
import axios from "axios"; // HTTP Client


function Overview() {

    const [hivData, setHivData] = React.useState([]);

    // axios is HTTP client
    useEffect(() => {
        axios.get('http://localhost:8080/python-new-hiv-cases').then(resp => {

            const respObj = JSON.parse(resp.data)
            setHivData(respObj.result);
        });

    }, []);


    return (
        <div>
            <Plot
                data={hivData}
                layout={{width: 500, height: 600, title: 'New HIV Cases by Infection Type'}}
            />

        </div>
    );
}

export default Overview;