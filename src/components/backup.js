import React, {useEffect} from 'react';
import ReactApexChart from "react-apexcharts";
import axios from "axios";

export default function Demographic() {

    const [columnChart, setColumnChart] = React.useState({
        series: [1, 1],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
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
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Female', 'Male', 'Transgender'],
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
            fill: {
                opacity: 1
            },
            // tooltip: {
            //     y: {
            //         formatter: function (val) {
            //             return "$ " + val + " thousands"
            //         }
            //     }
            // }
        },
    });



    const [pieData, setPieData] = React.useState({
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Heterosexual', 'MSM/TG', 'Injection drug use', 'Perinatal', 'Unknown', 'Blood transfusion'],
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

    useEffect(() => {

            let URL1 = "http://localhost:8080/demographic";
            let URL2 = "http://localhost:8080/risk";

            const fetchURL = (url) => axios.get(url);

            const promiseArray = [URL1, URL2].map(fetchURL);


            Promise.all(promiseArray)
                .then((d) => {
                    setColumnChart((prevState) => {
                        const res1 = JSON.parse(d[0].data)
                        prevState.series = JSON.parse(res1.series);
                        return ({
                            ...prevState
                        })
                    });

                    setPieData((prevState) => {
                        prevState.series = d[1].data
                        return ({
                            ...prevState
                        })
                    });

                })
                .catch((err) => {
                });

        },
        []);


    return (
        <div id="chart">
            <ReactApexChart options={columnChart.options} series={columnChart.series} type="bar" height={430}
                            width={780}/>
            <ReactApexChart options={pieData.options} series={pieData.series} type="pie" width={680}/>
        </div>
    );
}


