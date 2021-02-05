// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// Versi singkat
$(function () {

    $("#isi").html("<h1>Belajar jQuery</h1>");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("Belajar Javascript");
    });
    
    $("#isi").mouseleave(function () { 
        alert("Mouse Leave");
        console.log("mouse");
    });
});





























