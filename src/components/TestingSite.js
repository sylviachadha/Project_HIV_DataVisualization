import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from 'react-plotly.js';  // Plotly Javascript Library
import axios from "axios"; // HTTP Client


function TestingSite() {


    const [siteData, setSiteData] = React.useState([]);

    // axios is HTTP client
    useEffect(() => {

        axios.get('http://localhost:8080/python-hiv-cases-by-site').then(resp => {

            const respObj = JSON.parse(resp.data)
            setSiteData(respObj.result);
        });


    }, []);


    return (
        <div>
            <Plot
                data={siteData}
                layout={{width: 550, height: 600, title: 'HIV Cases by Site-ID'}}
            />
        </div>
    );
}

export default TestingSite;