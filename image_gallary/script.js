// Store images in Array 
let imgArr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];

// DOM - previous btn and store in var
let previous = document.querySelector('#previous-btn');

// DOM - next btn and store in var
let next = document.querySelector('#next-btn');

i = 0;

function prevImg () {

    if(i <= 0) { i = imgArr.length; }
    i--;  
    return setImage();

}

function nextImg () {

    if(i >= imgArr.length - 1) { i = -1 }
    i++;  
    return setImage();

}

function setImage () {

    document.querySelector('.image').setAttribute('src', 'img/' + imgArr[i]);

}





// function prevImg () {
//     document.querySelector('.image').setAttribute('src', 'img/' + imgArr[i]);

//     // filter through array, place var after 'src'
// }

