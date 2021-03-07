import {link} from './link.js';

export function ubah() { 
    let id = 11;
    let data = {
        pelanggan   : 'Update axios',
        alamat      : 'Update axios',
        telp        : '0812356'
    };
    link.put('/pelanggan/'+id,data).then(res=>{
        console.log(res)
        let tampil = `<h1>${res.data.pesan}</h1>`;

        document.querySelector('#out').innerHTML = tampil;
    });
}
