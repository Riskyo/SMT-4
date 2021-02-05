let tblmenu = [
    {idmenu:1, idkategori:1, menu:"Apel Manalagi", gambar:"3.jpg", harga:6000},
    {idmenu:2, idkategori:2, menu:"Pisang Raja", gambar:"4.jpg", harga:8500},
    {idmenu:3, idkategori:3, menu:"Nasi Padang", gambar:"5.jpg", harga:4500},
    {idmenu:4, idkategori:4, menu:"Nasi Ayam", gambar:"6.jpg", harga:1500},
    {idmenu:5, idkategori:5, menu:"Es Teh", gambar:"1.jpg", harga:1500},
    {idmenu:6, idkategori:6, menu:"Es Teh", gambar:"2.jpg", harga:1500},
];

let tampil = tblmenu.map(function (kolom) {
    return `
    <div class="produk-content">
        <div class="images">
            <img src="images/${kolom.gambar}" alt="" />
        </div>
        <div class="title">
            <h2>${kolom.menu}</h2>
        </div>
        <div class="harga">
            <h2>Rp. ${kolom.harga}</h2>
        </div>

        <div class="btn-beli">
            <button data-idmenu=${kolom.idmenu}>Beli</button>
        </div>
    </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli.dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })

    };
}

// console.log(cart);























































