//Variables
var date = "Fri Jul 08 2100 10:31:17 GMT"

var names = document.querySelector("#name")
var last_name = document.querySelector("#soyad")
var email = document.querySelector("#email")
var password = document.querySelector("#sifre")
var password_r = document.querySelector("#sifre_t")
var thirteen = document.querySelector("#age")
var checked = false
var age = document.querySelector(".age")
var hata = document.querySelector("#hata")


var uyusma = document.querySelector("#uyusma")


var buton = document.querySelector("#register")
var yon_buton = document.querySelector("#yonlen")

var email_login = document.querySelector("#email_login")
var sifre_login = document.querySelector("#sifre_login")
var giris_buton = document.querySelector("#gir")
var visibility = document.querySelector(".open")


var result = document.querySelector(".sonuc")

var email_kontrol = false
var sifre_kontrol = false



var isimler = []
var soyisimler = []
var emailler = []
var sifreler = []


function togglePass(){
    sifre_login.type = sifre_login.type == "password" ? "text" : "password";
}

if(window.location.href == "https://efeisky.github.io/register.html"){

    result.style.display = "none"
    uyusma.style.display = "none"
    age.style.backgroundColor = "#ffffff";


    buton.addEventListener("click",register)
    thirteen.addEventListener("click",function(){
    if(thirteen.checked){
        checked = true
    }else{
        checked = false
    }
    console.log(checked)
})
    yon_buton.addEventListener("click",function(){
    window.location.href="login.html"
})

    function pass(){
        pass_sifre = password.value
        pass_sifre_r = password_r.value
        pass_name = names.value
        pass_lastname = last_name.value
        pass_email = email.value
        
    }

    function register(){
        pass()
        if(pass_name == "" || pass_sifre == "" || pass_sifre_r == "" || pass_lastname == "" || pass_email == "" || checked == false){
            if(pass_name == ""){
                names.style.backgroundColor = "rgb(255, 36, 0,.2)"
                return
            }else if(pass_sifre == ""){
                password.style.backgroundColor = "rgb(255, 36, 0,.2)"
                return
            }else if(pass_sifre_r == ""){
                password_r.style.backgroundColor = "rgb(255, 36, 0,.2)"
                return
            }else if(pass_lastname == ""){
                last_name.style.backgroundColor = "rgb(255, 36, 0,.2)"
                return
            }else if(checked == false || checked==""){
                age.style.backgroundColor = "rgb(255, 36, 0,.2)"
                return
            }else{
                return
            }
    
        }else{
            names.style.backgroundColor = "#ffffff"
            last_name.style.backgroundColor = "#ffffff"
            email.style.backgroundColor = "#ffffff"
            password.style.backgroundColor = "#ffffff"
            password_r.style.backgroundColor = "#ffffff"
            thirteen.style.backgroundColor = "#ffffff"

            var atpos=pass_email.indexOf("@");
            var dotpos=pass_email.lastIndexOf(".")
            
    
            if(pass_sifre != pass_sifre_r || atpos<1 || dotpos<atpos+2 || dotpos+2>=pass_email.length ){
                uyusma.style.display ="block"
                result.style.display = "none"
            }
            else{
                isimler.unshift(pass_name)
                soyisimler.unshift(pass_lastname)
                emailler.unshift(pass_email)
                sifreler.unshift(pass_sifre)
        
                localStorage.setItem('isimler', isimler);
                localStorage.setItem('soyisimler', soyisimler);
                localStorage.setItem('email', emailler);
                localStorage.setItem('sifre', sifreler);
    
                console.log(emailler + emailler.length)

                uyusma.style.display = "none"
                result.style.display="block"

                return
                
            }
    
        }
    }

    
}else if(window.location.href == "https://efeisky.github.io/login.html"){
    hata.style.display = "none"
    console.log("logindeyiz")
    giris_buton.addEventListener("click",login) 

    function login(){
        var email_bilgileri = localStorage.getItem('email');
        var sifre_bilgileri = localStorage.getItem('sifre');

        var email_bilgi = new Array(email_bilgileri)
        var sifre_bilgi = new Array(sifre_bilgileri)

        var email_girisi = email_login.value
        var sifre_girisi = sifre_login.value


        for(var i=0;i <= email_bilgi.length; i++){
            if (email_bilgi[i] == email_girisi){
                console.log("Email mevcut sırası ="+i)
                console.log(email_bilgi)
                email_kontrol= true
            }else{
                console.log("Email yok")
            }
        }

        for(var i=0;i <= sifre_bilgi.length; i++){
            if (sifre_bilgi[i] == sifre_girisi){
                console.log("Şifre mevcut sırası ="+i)
                console.log(sifre_bilgi)
                sifre_kontrol= true
            }else{
                console.log("Şifre yok")
            }
        }

        if(email_kontrol==true && sifre_kontrol==true){
            console.log("Giriş başarılı")
            window.location.href="person_main.html"
        }else{
            console.log("Giriş Yok")
            hata.style.display = "block"
        }

    }
}else if(window.location.href == "https://efeisky.github.io/person_main.html"){
    var nameland = document.querySelector("#name-surname")
    var ismi = localStorage.getItem('isimler');
    var soyismi = localStorage.getItem('soyisimler');

    var ismi_bilgi = new Array(ismi)
    var soyismi_bilgi = new Array(soyismi)

    let isim = ismi_bilgi[0]
    let soyisim = soyismi_bilgi[0]

    nameland.innerHTML = "Hoş geldiniz, " + isim + " " + soyisim
    
}
