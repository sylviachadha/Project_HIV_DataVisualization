import './plots.css'
import React, {useEffect} from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList, Tooltip, Legend} from "recharts";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import axios from 'axios';

function SiteNewHiv() {

    const [data, setData] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/site').then(resp => {

            const json_from_python_backend = JSON.parse(resp.data)
            setData(json_from_python_backend)

        });
    }, []);

    const [value, setValue] = React.useState('all');

    const handleChange = (event) => {
        setValue(event.target.value);
    };



    return (

        <Grid container spacing={3}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <FormControl component="fieldset">
                    <RadioGroup row value={value} onChange={handleChange}>
                        <FormControlLabel value="recent" control={<Radio color="primary"/>} label="Recent"/>
                        <FormControlLabel value="longTerm" control={<Radio color="primary"/>} label="LongTerm"/>
                        <FormControlLabel value="all" control={<Radio color="primary"/>} label="All"/>
                    </RadioGroup>
                </FormControl>
            </Grid>


            <Grid item xs={6}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="Name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>

                    {(value === 'longTerm' || value === 'all') &&
                    <Bar dataKey="LongTerm" stackId="a" fill="#8884d8">
                        {value === 'all' &&
                        <LabelList dataKey="Percent"
                                   position="insideBottom"
                                   style={{
                                       textAnchor: 'middle',
                                       fontSize: "75%",
                                       fontWeight: "bold",
                                       fill: 'rgba(255,255,255,0.87)'
                                   }}/>
                        }
                    </Bar>
                    }
                    {(value === 'recent' || value === 'all') &&
                    <Bar dataKey="Recent" stackId="a" fill="#82ca9d"/>
                    }
                </BarChart>
            </Grid>
        </Grid>
    );
}

export default SiteNewHiv;
