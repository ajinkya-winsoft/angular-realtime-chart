'use strict';

var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function ($scope, $interval) {



        $scope.chartSeries =[
           
            {
                id: 'iphoneUsageData',
                name: 'Usage Time',
                data: (function () {
                             // generate an array of random data
                             var data = [],
                                     time = (new Date()).getTime(),
                                     i;

                             for (i = -999; i <= 0; i += 1) {
                                     data.push([
                                             time + i * 1000,
                                             Math.round(Math.random() * 100)
                                     ]);
                             }
                             return data;
                     }()),
                type: 'line',
                yAxis: 0,
                tooltip: {
                    valueSuffix: ' sec'
                },
                color: '#c680ca'
            }
        ],


    $scope.chartConfig = {
        options: {
            subtitle: {
                text: 'Click and drag to zoom in.'
            },
            chart: {
                backgroundColor: 'transparent',
                zoomType: 'x',
                type : 'stockchart',
                resetZoomButton: {
                    position: {
                        x: 0,
                        y: -35
                    },
                    theme: {
                        fill: 'white',
                        stroke: 'silver',
                        r: 0,
                        states: {
                            hover: {
                                fill: '#41739D',
                                style: {
                                    color: 'white'
                                }
                            }
                        }
                    }
                }
            },
            navigator: {
                enabled: true,
                // series: {
                //     data: []
                // }
            },
            rangeSelector: {
               enabled: true,
                        selected: 0,
                    //  allButtonsEnabled: true,
                buttons: [{
                    count: 1,
                    type: 'minute',
                    text: '1M'
                }, {
                    count: 2,
                    type: 'minute',
                    text: '2M'
                }, {
                    type: 'all',
                    text: 'All'
                }]

            },
            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.5

                },
                column: {
                    stacking: 'normal'
                },
                area: {
                    stacking: 'normal',
                    marker: {
                        enabled: false
                    }
                }

            },
            exporting: false,
            xAxis: [{
                type: 'datetime'
            }],
            yAxis: [

                { // Primary yAxis

                    min: 0,
                    allowDecimals: false,
                    title: {
                        text: 'number of notification',
                        style: {
                            color: '#80a3ca'
                        }
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#80a3ca'
                        }
                    }


                },
                { // Secondary yAxis
                    min: 0,
                    allowDecimals: false,
                    title: {
                        text: 'usage time',
                        style: {
                            color: '#c680ca'
                        }
                    },
                    labels: {
                        format: '{value}',
                        style: {
                            color: '#c680ca'
                        }
                    },
                    opposite: true

                }
            ],

            legend: {
                enabled: false
            },
            title: {
                text: ' '
            },
            credits: {
                enabled: false
            },

            loading: false,
            tooltip: {
                crosshairs: [
                    {
                        width: 1,
                        dashStyle: 'dash',
                        color: '#898989'
                    },
                    {
                        width: 1,
                        dashStyle: 'dash',
                        color: '#898989'
                    }
                ],
                headerFormat: '<div class="header">{point.key}</div>',
                pointFormat: '<div class="line"><div class="circle" style="background-color:{series.color};float:left;margin-left:10px!important;clear:left;"></div><p class="country" style="float:left;">{series.name}</p><p>{point.y:,.0f} {series.tooltipOptions.valueSuffix} </p></div>',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#a4a4a4',
                shadow: false,
                useHTML: true,
                percentageDecimals: 2,
                backgroundColor: "rgba(255,255,255,.7)",
                style: {
                    padding: 0
                },
                shared: true

            },
            useHighStocks: true

        },
        series: $scope.chartSeries,

        func: function (chart) {
          $interval(function() {
                if($scope.chartSeries[0].data.length > 300)
                          $scope.chartSeries[0].data.splice(0,1);

                          $scope.chartSeries[0].data.push([(new Date()).getTime(),Math.random()]);
                          //console.log("hi");
              }, 1000);
        }


    }



});
