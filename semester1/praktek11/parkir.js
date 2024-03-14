function hitungParkir(){
    // dapatkan nilai input
    let masuk = document.getElementById("masuk").value
    let keluar = document.getElementById("keluar").value

    // dapatkan elemen untuk menampilkan hasil
    let hasilDurasi = document.querySelector("#hasilDurasi")
    let hasilBiaya = document.querySelector("#hasilBiaya")

    // hitung durasi
    let durasi = keluar - masuk

    // hitung biaya
    let biaya = 3000

    // setelah 2 jam pertama, tambahkan biaya 1000 perjamnya
    
    if(durasi > 2){
        biaya += (durasi - 2) * 1000
    }
    
    console.log(biaya);

    hasilDurasi.innerHTML = durasi
    hasilBiaya.innerHTML = biaya
}
