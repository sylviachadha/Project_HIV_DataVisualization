import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from '../../../node_modules/react-plotly.js/react-plotly';  // Plotly Javascript Library
import axios from "axios";   // HTTP Client


function Status() {

    const [statusData, setStatusData] = React.useState([]);


    useEffect(() => {


        axios.get('http://localhost:8080/python-hiv-cases-by-status').then(resp => {

            const respObj = JSON.parse(resp.data)
            setStatusData(respObj.result);
        });


    }, []);


    return (
        <div>

            <Plot
                data={statusData}
                layout={{
                    barmode: 'stack',
                    width: 570,
                    height: 470,
                    title: 'Cases by Marital Status'
                }}
            />


        </div>
    );
}

export default Status;