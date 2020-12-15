import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from 'react-plotly.js';  // Plotly Javascript Library
import axios from "axios";   // HTTP Client
import Grid from "@material-ui/core/Grid";


function Demographic() {

    const [genderData, setGenderData] = React.useState([]);
    const [statusData, setStatusData] = React.useState([]);
    const [riskData, setRiskData] = React.useState([]);
    const [ageData, setAgeData] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/python-hiv-cases-by-gender').then(resp => {

            const respObj = JSON.parse(resp.data)
            setGenderData(respObj.result);
        });

        axios.get('http://localhost:8080/python-hiv-cases-by-status').then(resp => {

            console.log(resp)
            const respObj = JSON.parse(resp.data)
            setStatusData(respObj.result);
        });
        axios.get('http://localhost:8080/python-risk-category').then(resp => {

            console.log(resp)
            const respObj = JSON.parse(resp.data)
            setRiskData(respObj.result);
        });
        axios.get('http://localhost:8080/python-hiv-cases-by-age').then(resp => {

            console.log(resp)
            const respObj = JSON.parse(resp.data)
            setAgeData(respObj.result);
        });

    }, []);


    return (
        <div>

            <Plot
                data={genderData}
                layout={{
                    barmode: 'group',
                    width: 500,
                    height: 350,
                    title: 'HIV Infection Count by Sex'
                }}
            />


            <Plot
                data={statusData}
                layout={{
                    barmode: 'stack',
                    width: 500,
                    height: 350,
                    title: 'HIV Infection Count by Status'
                }}
            />


            <Plot
                data={riskData}
                layout={{width: 500, height: 600, title: 'Risk Category'}}
            />


            <Plot
                data={ageData}
                layout={{
                    barmode: 'group',
                    width: 500,
                    height: 450,
                    title: 'HIV Infection Count by Age Group'
                }}
            />

        </div>
    );
}

export default Demographic;