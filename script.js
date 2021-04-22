// calculate

function calculateTip() {
    var billAmount = document.getElementById("billamt").value;
    var serviceQuality = document.getElementById("servicequal").value;
    var peopleAmount = document.getElementById("peopleamt").value;

    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }

    // check to see if input is empty or less than equal to 1
    if (peopleAmount === "" || peopleAmount <= 1) {
        peopleAmount = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }

    //calculate
    let total = (billAmount * serviceQuality) / peopleAmount;

    //round to two decimal places
    total = Math.round(total * 100) / 100;

    //always have two digits after decimal point
    total = total.toFixed(2);

    //display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}
//hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("btn-calculate").onclick = function() {
  calculateTip()
};
