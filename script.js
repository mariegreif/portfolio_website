window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises!");
    //registrer klik på menu knap
    document.querySelector("#menu_dropdown").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#drop-button").classList.toggle("hidden");


    let erSkjult =
        document.querySelector("#drop-button").classList.contains("hidden");

    if (erSkjult == true) {
        // menuen er nu skjult - ændre menuknap til lll
        document.querySelector("#menu_dropdown").textContent = "Menu";
    } else {
        // menuen er nu vist - ændre menuknap til X
        document.querySelector("#menu_dropdown").textContent = "Skjul";
    }
}


//var i = 0; // start
//var images = [];
//var time = 3000;
//
//// Image list
//images[0] = 'billeder/prototype_fronter.JPG';
//images[1] = 'billeder/prototype_fronter2.JPG';
//
////Change image
//
//function changeImg() {
//    document.slide.src = images[i];
//
//    if (i < images.length - 1) {
//        i++;
//    } else {
//        i = 0;
//    }
//
//    setTimeout("changeImg()", time);
//}
//
//window.onload = changeImg;
