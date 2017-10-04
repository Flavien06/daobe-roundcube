// ==UserScript==
// @name         Rounndcube DAO-BE
// @namespace    http://tampermonkey.net/
// @version      1
// @description  OVH Rounndcube DAO-BE Theme
// @author       Flavien
// @include      https://mail.ovh.net/roundcube/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Flavien06/daobe-roundcube/master/.gitignore/Roubdcube_DAO-BE.js
// ==/UserScript==

//http://chironflavien.free.fr/DAO-BE/logo-dao-mini.png
//skins/larry/images/roundcube_logo.png

//http://chironflavien.free.fr/DAO-BE/tools-dao3.jpg
//images/watermark.jpg?v=e784.5000



var interval = 0.25; // in seconds

// DON'T EDIT BELOW ///////////////////

function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        img.src = img.src.replace('https://mail.ovh.net/roundcube/skins/larry/images/roundcube_logo.png', 'http://chironflavien.free.fr/DAO-BE/logo-dao-mini.png');
       //img.src = img.src.replace('https://mail.ovh.net/roundcube/skins/larry/images/watermark.jpg', 'http://chironflavien.free.fr/DAO-BE/tools-dao3.jpg');
    }
}

setInterval(imgReplace, interval * 1000);

////////////////////////////

var myImage = document.getElementById(idOfImageYouNeedToChange);
myImage.src = "your_image";

//var theImg = document.getElementById('imageId');
//theImg.src = 'someNewPath'

////////////////////////////


var images = document.getElementsByTagName("img");
var x = 0;
while (x < images.length) {
    if (images[x].src == "images/watermark.jpg") {
        images[x].src = "http://chironflavien.free.fr/DAO-BE/tools-dao3.jpg";
    }
    x = x + 1;
}

/////////////////////////////



//////////////////////////////
////
window.addEventListener('load', function() {
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
//images[i].src = images[i].src.replace('images/roundcube_logo.png', 'http://chironflavien.free.fr/DAO-BE/logo-dao-mini.png');
images[i].src = images[i].src.replace('images/watermark.jpg?v=e784.5000', 'http://chironflavien.free.fr/DAO-BE/tools-dao3.jpg');
}
}, false);
