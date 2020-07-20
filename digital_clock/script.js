function startClock() {

    let date = new Date();

    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();

   
    // set timestamp as AM or PM 
    let timeStamp = h >= 12 ? 'pm' : 'am';
    document.getElementById('time-stamp').textContent = timeStamp;

    // convert 24 hour format to 12 hour format
    let hours = (h % 12) || 12;
    

    // conditionals to place '0' in front of number if number < 10 (to look more like a real digital clock)
    if(hours < 10){
        document.getElementById('hours').textContent = `0${hours}`;
    } else {
        document.getElementById('hours').textContent = hours;
    }

    if(m < 10){
        document.getElementById('minutes').textContent = `0${m}`;
    } else {
        document.getElementById('minutes').textContent = m;
    }

    if(s < 10){
        document.getElementById('seconds').textContent = `0${s}`;
    } else {
        document.getElementById('seconds').textContent = s;
    }

}

setInterval(startClock, 1000);



// rotating color background

let colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

let counter = 0; 

function changeBg() {
	document.body.style.backgroundColor = colors[counter];
	counter++;
	if(counter >= colors.length) { 
        counter = 0; 
    }
};

setInterval(changeBg, 3000);

window.onload = changeBg();
window.onload = startClock();

