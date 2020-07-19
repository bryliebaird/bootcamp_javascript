let imgArray = ["url(img/bg1.jpg)", "url(img/bg2.jpg)", "url(img/bg3.jpg)"];

let counter = 0;
   
function startChange() {
	document.body.style.backgroundImage = imgArray[counter];
	counter++;
	if(counter >= imgArray.length) { 
        counter = 0; 
    }
};

setInterval(startChange, 3000);

window.onload = startChange();

