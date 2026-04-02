/* URL for AJAX Call */
/* See https://waterservices.usgs.gov/rest/IV-Service.html */
/* URL Generator: https://waterservices.usgs.gov/rest/IV-Test-Tool.html */

/*

PID's can be found at https://maps.waterdata.usgs.gov/mapper/

 	07055646 - Boxley
	07055660 - Ponca
	07055680 - Pruit
	07055780 - Carver 
	
	P7D means get the data for the last 7 days

	00065 - gauge height

Instataneous Water Service

1. Filter
List of Sites
	07055646,07055660,07055680,07055780
Optional Arguments
	JSON

Date Ranges
	Return all values from a period now
Period
	P7D

Sites Serving Parameter Codes
	00065

https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07055780&indent=on&period=P7D&siteStatus=all&parameterCd=00065

*/

getData();

async function getData() {
var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055680,07055780&period=P7D&parameterCd=00065&siteStatus=active";

var msgObject = await fetch(myURL);
/* Check the status */
var msgJSONText = await msgObject.text();
var msg = JSON.parse(msgJSONText);


/* Your code to process the result goes here */
var dates = [];
var values = [];

/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[0].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[0].values[0].value[i].value
    dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[0].sourceInfo.siteName
var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[0].variable.variableDescription

var ctx = document.getElementById("chartjs-0");
var myChart = new Chart(ctx, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{"label":"Gauge Height",
        "data": values,
        "fill":false,
        "borderColor":"rgb(75, 192, 192)",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: sitename + ' - PID: ' + sitecode,
                fontSize : 18
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                         displayFormats: {
                            day: 'MMM D'
                        }
                    }
                }],

                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: siteDescription
                    }
                }]

            }
        }
    }
);


var dates = [];
var values = [];

/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[1].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[1].values[0].value[i].value
    dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[1].sourceInfo.siteName
var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[1].variable.variableDescription

var ctx = document.getElementById("chartjs-1");
var myChart = new Chart(ctx, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{"label":"Gauge Height",
        "data": values,
        "fill":false,
        "borderColor":"rgb(75, 192, 192)",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: sitename + ' - PID: ' + sitecode,
                fontSize : 18
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                         displayFormats: {
                            day: 'MMM D'
                        }
                    }
                }],

                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: siteDescription
                    }
                }]

            }
        }
    }
);


var dates = [];
var values = [];

/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[2].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[2].values[0].value[i].value
    dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[2].sourceInfo.siteName
var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[2].variable.variableDescription

var ctx = document.getElementById("chartjs-2");
var myChart = new Chart(ctx, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{"label":"Gauge Height",
        "data": values,
        "fill":false,
        "borderColor":"rgb(75, 192, 192)",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: sitename + ' - PID: ' + sitecode,
                fontSize : 18
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                         displayFormats: {
                            day: 'MMM D'
                        }
                    }
                }],

                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: siteDescription
                    }
                }]

            }
        }
    }
);

var dates = [];
var values = [];

/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[3].values[0].value.length
for (i = 0; i < fLen; i++) {
    values[i] = msg.value.timeSeries[3].values[0].value[i].value
    dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[3].sourceInfo.siteName
var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value
var siteDescription = msg.value.timeSeries[3].variable.variableDescription

var ctx = document.getElementById("chartjs-3");
var myChart = new Chart(ctx, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{"label":"Gauge Height",
        "data": values,
        "fill":false,
        "borderColor":"rgb(75, 192, 192)",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
            title: {
                display: true,
                text: sitename + ' - PID: ' + sitecode,
                fontSize : 18
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                         displayFormats: {
                            day: 'MMM D'
                        }
                    }
                }],

                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: siteDescription
                    }
                }]

            }
        }
    }
);
    
}