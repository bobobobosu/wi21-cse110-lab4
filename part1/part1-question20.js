var x = 0;
var intervalID = x.setInterval(printDate, 1000);

function printDate(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}