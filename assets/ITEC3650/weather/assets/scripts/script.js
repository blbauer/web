// Latitude/Longitude are Global
let latitude = 0;
let longitude = 0;

function GetTemp() {
    "use strict;"
    // Get a reference to the form - Use the ID of the form
    let form = $("#myform");
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        DisplayTemp();
    }
}

async function DisplayTemp() {
    "use strict";
    let Location = document.getElementById("Location").value;
    // URL for AJAX call
    let myURL1 = "https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(Location);
    /* Fetch the data */
    let msg1Object = await fetch(myURL1);
    /* Check the status */
    if (msg1Object.status >= 200 && msg1Object.status <= 299) {
        // Get the text of the response            
        let msg1JSONText = await msg1Object.text();
        // Parse the JSON string into an object
        let msg1 = JSON.parse(msg1JSONText);
        // if no results found then results are not returned
        // see if results exists
        if (typeof msg1.results == "object") {
            if (msg1.results.length > 0) {
                // Pick up first result
                let name = msg1.results[0].name;
                latitude = msg1.results[0].latitude;
                longitude = msg1.results[0].longitude;
                let state = msg1.results[0].admin1;
                let country = msg1.results[0].country;
                document.getElementById("Geolocation").innerHTML = name + ", " + state + ", " + country + "<br>" +
                "Latitude = " + latitude + " - Longitude = " + longitude;
            }
        } else {
            alert("Location Not Found")
            return    
        }
    } else {
        alert("Location Not Found - Status: " + msg1Object.status)
        return
    }

    if (latitude != 0 && longitude != 0) {

        // URL for AJAX Call
        let myURL2 = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m&temperature_unit=fahrenheit"
        // Make the AJAX call
        let msg2Object = await fetch(myURL2);
        // Check the status 
        if (msg2Object.status >= 200 && msg2Object.status <= 299) {
            // Get the text of the response           
            let msg2JSONText = await msg2Object.text();
            // Parse the JSON string into an object
            let msg2 = JSON.parse(msg2JSONText);
            // Contains Temperature Dates
            let tempdate = [];
            // Contains Temperature Values
            let tempvalue = [];
            // Number of temperature values
            let numtemps = msg2.hourly.temperature_2m.length;
            numtemps = 12;

            if (numtemps > 0) {
                for (let i = 0; i < numtemps; i++) {
                    // Put temperature value into array
                    tempvalue[i] = msg2.hourly.temperature_2m[i];
                    // Date value is in format: YYYY-MM-DDTHH:MM
                    // Convert date to unix milliseconds
                    let unixmillsec = Date.parse(msg2.hourly.time[i]);
                    // Create temporary data variable 
                    let tmpdate = new Date(unixmillsec);
                    /* Extract the date/time string for a more friendly format */
                    tempdate[i] = tmpdate.toLocaleString();
                    tempdate[i] = msg2.hourly.time[i].replace("T",", ")
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
                    "datasets":[{"label":"Temperature",
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
        } else {
            /* AJAX completed with error */
            alert("Location Not Found - Status: " + msg2Object.status)
                return
        }
    }
}


function ClearForm() {
    "use strict;"

    document.getElementById("Location").value = "";
    document.getElementById("LocationError").innerHTML = "";
    document.getElementById("Geolocation").innerHTML = "";
    document.getElementById("TempValueTable").innerHTML = "";
    
    /* Ugly Code to Erase Canvas */
    let canvas0 = document.getElementById("chartjs-0");
    let context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
}