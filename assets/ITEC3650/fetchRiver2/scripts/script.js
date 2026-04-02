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
var myURL = "https://api.waterdata.usgs.gov/ogcapi/v0/collections/continuous/items?f=json&lang=en-US&limit=10000&properties=monitoring_location_id,parameter_code,statistic_id,time,value,unit_of_measure&offset=0&monitoring_location_id=USGS-07055646%2C%20USGS-07055660%2C%20USGS-07055680%2C%20USGS-07055780&parameter_code=00065&statistic_id=00011&time=P7D";

var msgObject = await fetch(myURL);
/* Check the status */
var msgJSONText = await msgObject.text();
var msg = JSON.parse(msgJSONText);


/* Your code to process the result goes here */
var dates = [];
var values = [];

/* fLen contains the length of the array (number of values) */
fLen = msg.features.length
var j = 0;
for (i = 0; i < fLen; i++) {
    if (msg.features[i].properties.monitoring_location_id == "USGS-07055646") {
        values[j] = msg.features[i].properties.value;
        dates[j] = msg.features[i].properties.time;
        j= j + 1;
    }
}
var sitename = "Boxley"
var sitecode = "USGS-07055646"
var siteDescription = "Boxley Creek"

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


/* Your code to process the result goes here */
var dates = [];
var values = [];

/* fLen contains the length of the array (number of values) */
fLen = msg.features.length
var j = 0;
for (i = 0; i < fLen; i++) {
    if (msg.features[i].properties.monitoring_location_id == "USGS-07055660") {
        values[j] = msg.features[i].properties.value;
        dates[j] = msg.features[i].properties.time;
        j= j + 1;
    }
}
var sitename = "Ponca"
var sitecode = "USGS-07055660"
var siteDescription = "Ponca Bridge"

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


/* Your code to process the result goes here */
var dates = [];
var values = [];

/* fLen contains the length of the array (number of values) */
fLen = msg.features.length
var j = 0;
for (i = 0; i < fLen; i++) {
    if (msg.features[i].properties.monitoring_location_id == "USGS-07055680") {
        values[j] = msg.features[i].properties.value;
        dates[j] = msg.features[i].properties.time;
        j= j + 1;
    }
}
var sitename = "Pruit"
var sitecode = "USGS-07055680"
var siteDescription = "Pruitt Bridge"

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


}