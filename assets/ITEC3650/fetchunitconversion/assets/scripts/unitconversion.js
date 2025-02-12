$( "#myform" ).validate({
 
});

async function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // From Value
        var FromValue = document.getElementById("FromValue").value;

        // Get the value associated with the FromUnit
        var FromUnit;
        if (document.getElementById("FromCentimeters").checked) {
            FromUnit = document.getElementById("FromCentimeters").value;
        }
        if (document.getElementById("FromMeters").checked) {
            FromUnit = document.getElementById("FromMeters").value;
        }
        if (document.getElementById("FromKilometers").checked) {
            FromUnit = document.getElementById("FromKilometers").value;
        }
        if (document.getElementById("FromInches").checked) {
            FromUnit = document.getElementById("FromInches").value;
        }
        if (document.getElementById("FromFeet").checked) {
            FromUnit = document.getElementById("FromFeet").value;
        }
        if (document.getElementById("FromYards").checked) {
            FromUnit = document.getElementById("FromYards").value;
        }
        if (document.getElementById("FromMiles").checked) {
            FromUnit = document.getElementById("FromMiles").value;
        }

            // Get the value associated with the FromUnit
        var ToUnit;
        if (document.getElementById("ToCentimeters").checked) {
            ToUnit = document.getElementById("ToCentimeters").value;
        }
        if (document.getElementById("ToMeters").checked) {
            ToUnit = document.getElementById("ToMeters").value;
        }
        if (document.getElementById("ToKilometers").checked) {
            ToUnit = document.getElementById("ToKilometers").value;
        }
        if (document.getElementById("ToInches").checked) {
            ToUnit = document.getElementById("ToInches").value;
        }
        if (document.getElementById("ToFeet").checked) {
            ToUnit = document.getElementById("ToFeet").value;
        }
        if (document.getElementById("ToYards").checked) {
            ToUnit = document.getElementById("ToYards").value;
        }
        if (document.getElementById("ToMiles").checked) {
            ToUnit = document.getElementById("ToMiles").value;
        }
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        
        /* AJAX unitconversion requires FromValue, FromUnit, and ToUnit */
        
        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);
        
        /* fetch the results */
        let myConvObject = await fetch(myURL);
        let myToValue = await myConvObject.text();
        
        document.getElementById("ToValue").innerHTML = myToValue;
    }
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueError").innerHTML = "";
    document.getElementById("FromCentimeters").checked = false;
    document.getElementById("FromMeters").checked = false;
    document.getElementById("FromKilometers").checked = false;
    document.getElementById("FromInches").checked = false;
    document.getElementById("FromFeet").checked = false;
    document.getElementById("FromYards").checked = false;
    document.getElementById("FromMiles").checked = false;
    document.getElementById("FromUnitError").innerHTML = "";
    document.getElementById("ToCentimeters").checked = false;
    document.getElementById("ToMeters").checked = false;
    document.getElementById("ToKilometers").checked = false;
    document.getElementById("ToInches").checked = false;
    document.getElementById("ToFeet").checked = false;
    document.getElementById("ToYards").checked = false;
    document.getElementById("ToMiles").checked = false;
    document.getElementById("ToUnitError").innerHTML = "";
    document.getElementById("ToValue").innerHTML = "";
}