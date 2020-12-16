import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from '../../../node_modules/react-plotly.js/react-plotly';  // Plotly Javascript Library
import axios from "axios";   // HTTP Client


function Site() {

    const [siteData, setSiteData] = React.useState([]);


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
                    layout={{width: 550, height: 600, title: 'Cases by Testing Site-ID'}}
                />
            </div>

            );
}

export default Site;