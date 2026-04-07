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
*/
async function GetData() {
	var myURL = "https://api.waterdata.usgs.gov/ogcapi/v0/collections/continuous/items?f=json&lang=en-US&limit=10000&properties=monitoring_location_id,parameter_code,statistic_id,time,value,unit_of_measure&offset=0&monitoring_location_id=USGS-07055646%2C%20USGS-07055660%2C%20USGS-07055680%2C%20USGS-07055780&parameter_code=00065&statistic_id=00011&time=P7D";
    var msgObject = await fetch(myURL);
    var msgJSONText = await msgObject.text();
    var msg = JSON.parse(msgJSONText);
    document.getElementById("msg").innerHTML = msgJSONText;
}