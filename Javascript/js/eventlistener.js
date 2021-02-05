function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "Belajar Eventlistener";
    console.log("Coba EventListener");
}


// judul.addEventListener("click", coba);
// judul.onmouseover = coba;
judul.onmouseover = function () {
    console.log("Coba Function anonymous");
};






























