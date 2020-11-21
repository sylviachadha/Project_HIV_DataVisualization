import React, {useEffect} from 'react';
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default function Partner() {
    const [data, setData] = React.useState({
        series: [1,1],
        options: {
            chart: {
                width: 480,
                type: 'pie',
            },
            labels: ['Index-Test=Yes', 'Index-Test=No'],
            dataLabels: {
                enabled: true,
                textAnchor: 'end',
                background: {
                    enabled: true,
                    foreColor: '#000000',
                    borderColor: '#fff',
                },
                style: {
                    fontSize: '18px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                }
            },
            legend: {
                show: true,
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '18px',
                fontFamily: 'Helvetica, Arial',
                fontWeight: 400,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom',
                        fontSize: '24px',
                    }
                }
            }]
        },


    });

    useEffect(() => {
        axios.get('http://localhost:8080/index-pie').then(resp => {
            setData(prevState => ({
                ...prevState,
                series: resp.data
            }
            ));


        });
    }, []);


    return (
        <div id="chart">
            <ReactApexChart options={data.options} series={data.series} type="pie" width={480}/>
        </div>
    );
}