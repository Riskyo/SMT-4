if (false){
    console.log("Dijalankan jika Benar");
}else{
    console.log("Dijalankan jika Salah");
}


let baik = "Lulus";
let gagal = "Tidak Lulus";
let peringatan = "Nilai Salah";
let nilai = 1000;
let standar = 60;
let batasatas = 100;
let batasbawah = 0;

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standar) {
        console.log(baik);
    }else{
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}






