let numberofyears;
let currentyear = new Date().getFullYear();

//This will detemine if it is past June 23 of the current year or not (Months are from 0-11, Days are from 1-31)
if (new Date().getMonth() >= 5 && new Date().getDate() >= 23) {
    numberofyears = currentyear - 2001;
} else {
    numberofyears = currentyear - 2002;
}

// Determines if today is my anniversary or not
if (new Date().getMonth() === 5 && new Date().getDate() === 23) {
    document.getElementById('anniversarytoday').innerHTML = "TODAY IS MY ANNIVERSARY!!!";
}
    
document.getElementById('marriedyears').innerHTML = numberofyears;