import React, {useEffect} from 'react';  // React Framework (Javascript + HTML + CSS)
import Plot from '../../../node_modules/react-plotly.js/react-plotly';  // Plotly Javascript Library
import axios from "axios";   // HTTP Client


function Age() {

    const [ageData, setAgeData] = React.useState([]);


    useEffect(() => {


        axios.get('http://localhost:8080/python-hiv-cases-by-age').then(resp => {

            // console.log(resp.data)
            const respObj = JSON.parse(resp.data)
            setAgeData(respObj.result);
        });

    }, []);


    return (
        <div>

            <Plot
                data={ageData}
                layout={{
                    barmode: 'group',
                    width: 500,
                    height: 450,
                    title: 'Cases by Age Group'
                }}
            />

        </div>
    );
}

export default Age;