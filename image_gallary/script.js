// Store images in Array 
let imgArr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];

// DOM - previous btn and store in var
let previous = document.querySelector('#previous-btn');

// DOM - next btn and store in var
let next = document.querySelector('#next-btn');

// Current Image Index
i = 0;


// Previous Button Function
function prevImg () {
    if(i <= 0) { i = imgArr.length; }
    i--;  
    return setImage();
}


// Next Button Function 
function nextImg () {
    if(i >= imgArr.length - 1) { i = -1 }
    i++;  
    return setImage();
}


// Setting the Image 
function setImage () {
    document.querySelector('.image').setAttribute('src', 'img/' + imgArr[i]);
}
