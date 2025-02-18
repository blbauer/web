function GetTemp() {
    DisplayTemp();
}

async function DisplayTemp() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    let form = $("#myform");
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        let Location = document.getElementById("Location").value;
        let myURL1 = "https://geocoding-api.open-meteo.com/v1/search?name=" + Location;

        let msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            let msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            let msg1 = JSON.parse(msg1JSONText);
            /* Your code to process the result goes here - display the returned message */
            if (msg1.results.length > 0) {
                let name = msg1.results[0].name;
                let latitude = msg1.results[0].latitude;
                let longitude = msg1.results[0].longitude;
                let state = msg1.results[0].admin1;
                let country = msg1.results[0].country;
                document.getElementById("geolocation").innerHTML = name + ", " + state + ", " + country;

            }

        }
 
        /* URL for AJAX Call */
        let myURL2 = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&temperature_unit=fahrenheit"

        /* Make the AJAX call */
        let msg2Object = await fetch(myURL2);
        /* Check the status */
        if (msg2Object.status >= 200 && msg2Object.status <= 299) {            
            let msg2JSONText = await msg2Object.text();
            // Parse the JSON string into an object
            let msg2 = JSON.parse(msg2JSONText);
            /* Your code to process the result goes here - display the returned message */
            let tempdate = [];
            let tempvalue = [];
            let numtemps = msg2.hourly.temperature_2m.length;

            if (numtemps > 0) {
                for (let i = 0; i < numtemps; i++) {
                    /* temperature value */
                    tempvalue[i] = msg2.hourly.temperature_2m[i];
                    /* Convert date to unixmilliseconds */
                    let unixmillsec = Date.parse(msg2.hourly.time[i]);
                    /* Create temporary data variable */
                    let tmpdate = new Date(unixmillsec);
                    /* extract the date/time string from the value */
                    tempdate[i] = tmpdate.toLocaleString();
                }
            }

            let tempvaluetable = "";
            if (numtemps > 0) {
                tempvaluetable = tempvaluetable + "<table><caption>Temperature</caption><tr><th>Date</th><th>Temp</th></tr>";
                for (let i = 0; i < numtemps; i++) {
                    tempvaluetable = tempvaluetable + "<tr><td>" + tempdate[i] + "</td><td>" + tempvalue[i] + "</td></tr>";
                }
                tempvaluetable = tempvaluetable + "</table>"
                document.getElementById("TempValueTable").innerHTML = tempvaluetable;
            }

            let ctx0 = document.getElementById("chartjs-0");
                let myChart0 = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": tempdate,
                        "datasets":[{"label":"Stock Close",
                        "data": tempvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );
            
            }
            
        else {
            /* AJAX completed with error - probably invalid stock ticker symbol */
            alert("Stock Not Found - Status: " + msg2Object.status)
                return
        }
    }
}

function ClearForm() {
    "use strict;"

    document.getElementById("StockSymbol").value = "";
    document.getElementById("StockSymbolError").innerHTML = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("FromDateError").innerHTML = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("ToDateError").innerHTML = "";
    document.getElementById("company").innerHTML = "";
    document.getElementById("address").innerHTML = "";
    document.getElementById("description").innerHTML = "";
    document.getElementById("employees").innerHTML = "";
    document.getElementById("url").innerHTML = "";
    document.getElementById("url").href = "";
    document.getElementById("StockValueTable").innerHTML = "";
    document.getElementById("StockVolumeTable").innerHTML = "";
    
    /* Ugly Code to Erase Canvas */
    let canvas0 = document.getElementById("chartjs-0");
    let context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    let canvas1 = document.getElementById("chartjs-1");
    let context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}