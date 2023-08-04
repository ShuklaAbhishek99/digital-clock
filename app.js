window.onload = ()=>{
    function buildClock(){
        const date = new Date();
    
        let hours = date.getHours(); // 0-23
        let minutes = date.getMinutes(); // 0-59
        let seconds = date.getSeconds(); // 0-59

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;seconds
    
        document.getElementById('clock-hours').innerText = hours;
        document.getElementById('clock-minutes').innerText = minutes;
        document.getElementById('clock-seconds').innerText = seconds;
    
        setTimeout(buildClock, 1000); 
        //this line created a loop like structure which keeps calling buildClock
    }

    buildClock();
}