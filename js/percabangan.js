 if (false) {
     console.log("dijalankan jika benar");
 }else {
     console.log("dijalankan jika benar");

 }

 let nilai = 59;
 let standar = 60;
 let baik = "LULUS";
 let gagal = "TIDAK LULUS";
 let batasatas = 100;
 let batasbawah = 0;
 let peringatan = "nilai salah";

 if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standar) {
        console.log(baik);
    } else {
        console.log(gagal);
    }
 } else {
    console.log(peringatan);
 } 

