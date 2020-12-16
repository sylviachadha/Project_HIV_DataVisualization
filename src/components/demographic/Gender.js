import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from '../../../node_modules/react-plotly.js/react-plotly';  // Plotly Javascript Library
import axios from "axios";   // HTTP Client


function Gender() {

    const [genderData, setGenderData] = React.useState([]);
    const [trendData, setTrendData] = React.useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/python-hiv-cases-by-gender').then(resp => {

            const respObj = JSON.parse(resp.data)
            setGenderData(respObj.result);
        });

        axios.get('http://localhost:8080/python-trend-gender').then(resp => {

            const respObj = JSON.parse(resp.data)
            setTrendData(respObj.result);
        });

    }, []);


    return (
        <div>

            <Plot
                data={genderData}
                layout={{
                    barmode: 'group',
                    width: 570,
                    height: 470,
                    title: 'Cases By Gender'
                }}
            />
            <Plot
                data={trendData}
                layout={{width: 500, height: 470, title: 'Trend Chart'}}
            />

        </div>
    );
}

export default Gender;