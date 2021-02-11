import { useState } from 'react';
import Tabel from "./Tabel"

function Menu() {
    const titel = "Daftar Menu"
    const [menus,setMenu]=useState(
        [
            {idmenu:1, idkategori:1, menu:"Apel Manalagi", gambar:"3.jpg", harga:6000},
            {idmenu:2, idkategori:1, menu:"Pisang Raja", gambar:"4.jpg", harga:8500},
            {idmenu:3, idkategori:2, menu:"Nasi Padang", gambar:"5.jpg", harga:4500},
            {idmenu:4, idkategori:2, menu:"Nasi Ayam", gambar:"6.jpg", harga:1500},
            {idmenu:5, idkategori:3, menu:"Es Teh", gambar:"1.jpg", harga:1500},
            {idmenu:6, idkategori:3, menu:"Es Teh", gambar:"2.jpg", harga:1500},
        ]
    );

    return (
      <div className="App">
        <Tabel menu = {menus} titel = {titel}/>
        <Tabel menu = {menus.filter((data)=>(data.idkategori===3))} titel = "Menu Buah"/>
      </div>
    );
  }
  
  export default Menu;
  