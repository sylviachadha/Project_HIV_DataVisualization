import React, {useEffect} from 'react';
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default function NewHiv() {
    const [data, setData] = React.useState({
        series: [1, 1],
        options: {
            chart: {
                width: 480,
                type: 'pie',
            },
            labels: ['Long-Term Infection', 'Recent-Infection'],
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
        },


    });

    const [barData, setBarData] = React.useState({
        series: [],
        options: {
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    barHeight: '80%',
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },

                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '16px',
                    colors: ['#fff']
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
            stroke: {
                show: true,
                width:1,
                colors: ['#fff']
            },
            xaxis: {
                categories: ['VCT-Site1', 'VCT-Site2', 'VCT-Site3', 'VCT-Site4', 'VCT-Site5'],
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 120,
                    style: {
                        colors: [],
                        fontSize: '18px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                    offsetX: 0,
                    offsetY: 0,
                    format: undefined,
                    formatter: undefined,
                    datetimeUTC: true,
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: "MMM 'yy",
                        day: 'dd MMM',
                        hour: 'HH:mm',
                    },
                },
            },
            yaxis: {
                // title: {
                //     text: 'Count'
                // },
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 120,
                    style: {
                        colors: [],
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                    offsetX: 0,
                    offsetY: 0,
                    format: undefined,
                    formatter: undefined,
                    datetimeUTC: true,
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: "MMM 'yy",
                        day: 'dd MMM',
                        hour: 'HH:mm',
                    },
                },
            }
        },
    });

    useEffect(() => {
        axios.get('http://localhost:8080/new-hiv-pie').then(resp => {
            setData(prevState => ({
                    ...prevState,
                    series: resp.data
                }
            ));
        });

        axios.get('http://localhost:8080/site').then(resp => {

            const res = JSON.parse(resp.data)
            const series_obj = JSON.parse(res.series)
            setBarData((prevState) => {
                prevState.series = series_obj;
                return ({
                    ...prevState
                })
            });

        });
    }, []);


    return (
        <div id="chart">
            <ReactApexChart options={data.options} series={data.series} type="pie" width={680}/>
            <ReactApexChart options={barData.options} series={barData.series} type="bar" height={430} width={1000}/>
        </div>
    );
}


