// Store images in Array 
let imgArr = ['url(img1.jpg)', 'url(img12.jpg)', 'url(img3.jpg)', 'url(img4.jpg)', 'url(img5.jpg)', 'url(img6.jpg)'];

// DOM - previous btn and store in var
let previous = document.querySelector('#previous-btn');

// DOM - next btn and store in var
let next = document.querySelector('#next-btn');

function nextImg () {
    document.querySelector('.image').setAttribute('src', 'img/img2.jpg');

    // filter through array, place var after 'src'
    
}


function prevImg () {
    document.querySelector('.image').setAttribute('src', 'img/img6.jpg');

    // filter through array, place var after 'src'
}

