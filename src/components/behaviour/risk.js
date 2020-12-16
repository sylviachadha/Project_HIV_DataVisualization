import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from '../../../node_modules/react-plotly.js/react-plotly';  // Plotly Javascript Library
import axios from "axios";   // HTTP Client


function Risk() {

    const [riskData, setRiskData] = React.useState([]);


    useEffect(() => {


        axios.get('http://localhost:8080/python-risk-category').then(resp => {

            const respObj = JSON.parse(resp.data)
            setRiskData(respObj.result);
        });


    }, []);


    return (
        <div>

            <Plot
                data={riskData}
                layout={{width: 600, height: 600, title: 'Risk Categories'}}
            />

        </div>
    );
}

export default Risk;