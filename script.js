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
