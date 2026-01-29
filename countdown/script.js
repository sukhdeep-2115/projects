const endDate = new Date("2026-04-14T23:59:59").getTime();
const startDate = new Date().getTime();

let x = setInterval( function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - startDate; //0-10=10 out of 100
    const distancePending = endDate - now; //100 - 10 = 90

    //calculate days, hours, min, secs
    // 1day 24*60*60*1000ms

    const oneDayinMills = (24*60*60*1000);
    const onehoursinMills = (60*60*1000);
    const onemininMills = (60*1000);
    const onesecinMills = (1000);

    const days = Math.floor(distancePending/(oneDayinMills));
    const hours = Math.floor(distancePending%(oneDayinMills)/(onehoursinMills));
    const minutes = Math.floor(distancePending%(onehoursinMills)/(onemininMills));
    const secs = Math.floor(distancePending%(onemininMills)/(onesecinMills));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = secs;

// for progress bar

const totalDistance = endDate - startDate;
percentageDistance = (distanceCovered/totalDistance)*100;

document.getElementById("progress-bar").style.width = percentageDistance+"%";


if(distancePending<0){
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAY";
    document.getElementById("progress-bar").style.width = "100%";
}





}, 1000);