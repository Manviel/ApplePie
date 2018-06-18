function toggle() {
    var el = document.getElementById("mobile");
    if (el.className === "menu") {
        el.className += " active";
    } else {
        el.className = "menu";
    }
}

new WOW().init();
