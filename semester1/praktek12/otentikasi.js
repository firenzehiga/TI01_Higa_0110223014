function auth() {
    const username = "higa"
    const password = "101013"

    // tangkap id inputan 
    let userInput = document.getElementById("username").value
    let passInput = document.getElementById("password").value

    // cek login
    if(username == userInput && passInput){
        alert("Login Berhasil")
        document.location = "home.html"
    } else{
        alert("Login Gagal!")
    }
}