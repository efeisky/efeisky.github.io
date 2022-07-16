var tarih = "Mon Jul 04 2030 09:21:27 GMT"

var veri_gir = document.querySelector(".info_giris")
var merkez = document.querySelector("#merkez")
var giris_date = document.querySelector("#atama_tarihi")
var cikis_date = document.querySelector("#atama_bitis_tarihi")
var gorev = document.querySelector("#alan_gorev")
var yıl = document.querySelector("#atama_suresi")
var ad = document.querySelector("#isim")
var kanun = document.querySelector("#kanun")

var ust_yonetim = document.querySelectorAll(".ust-bilgi")
var fakulte_yonetim = document.querySelectorAll(".yuksek-bilgi")
var arge_yonetim = document.querySelectorAll(".uyg-bilgi")

let deleteBtns;
let editBtns;
var merkez_secim;

veri_gir.addEventListener("click",function(){

    if(merkez.value != "" && giris_date.value != "" && gorev.value !="" && cikis_date.value != "" && yıl.value != "" && ad.value !="" && kanun.value != ""){
        merkez.style.backgroundColor = "var(--main-color)"
        giris_date.style.backgroundColor = "var(--main-color)"
        gorev.style.backgroundColor = "var(--main-color)"
        cikis_date.style.backgroundColor = "var(--main-color)"
        yıl.style.backgroundColor = "var(--main-color)"
        ad.style.backgroundColor = "var(--main-color)"
        kanun.style.backgroundColor = "var(--main-color)"
        add()
    }else{
        console.log("Girilmeyen değer(ler) mevcut")
        if(merkez.value == ""){
            merkez.style.border = "1px solid #666"
            merkez.style.backgroundColor = "rgb(255, 36, 0,.2)"
        }else if(giris_date.value == ""){
            giris_date.style.border = "1px solid #666"
            giris_date.style.backgroundColor = "rgb(255, 36, 0,.2)"
        }else if(gorev.value ==""){
            gorev.style.border = "1px solid #666"
            gorev.style.backgroundColor = "rgb(255, 36, 0,.2)"
        }else if(cikis_date.value == ""){
            cikis_date.style.border = "1px solid #666"
            cikis_date.style.backgroundColor = "rgb(255, 36, 0,.2)"
        }else if(yıl.value == ""){
            yıl.style.border = "1px solid #666"
            yıl.style.backgroundColor = "rgb(255, 36, 0,.2)"
        }else if(ad.value ==""){
            ad.style.border = "1px solid #666"
            ad.style.backgroundColor = "rgb(255, 36, 0,.2)"
        }else if(kanun.value == ""){
            kanun.style.border = "1px solid #666"
            kanun.style.backgroundColor = "rgb(255, 36, 0,.2)"
        }
    }
})

function yazma(todo){
    if (todo.merkez == "Rektörlük"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        ust_yonetim[0].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")


    }
    else if(todo.merkez == "Danışmanlar"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        ust_yonetim[1].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Senato"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        ust_yonetim[2].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Yönetim Kurulu"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        ust_yonetim[3].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Yürütme Kurulu"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        ust_yonetim[4].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Mütevelli"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        ust_yonetim[5].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Dekan"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        fakulte_yonetim[0].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Bölümler"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        fakulte_yonetim[1].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Bölüm Başkanları"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        fakulte_yonetim[2].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Fakülte Yönetim Kurulu"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        fakulte_yonetim[3].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Fakülte Kurulu"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        fakulte_yonetim[4].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Müdürler"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        arge_yonetim[0].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Uyg. Araştırma Merkezleri Yönetim Kurulu"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        arge_yonetim[1].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    else if(todo.merkez == "Danışman Kurulu"){
        var lstItem = document.createElement("li");
        var lstLeft = document.createElement("div")
        var lstRight = document.createElement("div")
        var del = document.createElement("button")
        var replace = document.createElement("button")
    
        arge_yonetim[2].appendChild(lstItem)
        lstItem.style.display = "flex"
        lstItem.style.justifyContent = "space-around"
        lstItem.style.alignItems = "center"

        lstItem.appendChild(lstLeft)
        lstLeft.textContent = todo.text

        lstItem.appendChild(lstRight)

        lstRight.appendChild(del)
        lstRight.style.display = "flex"
        lstRight.style.gap = "3px"
        lstRight.appendChild(replace)
        
        del.textContent = "Sil"
        del.setAttribute("class","delete")

        replace.textContent = "Değiştir"
        replace.setAttribute("class","replace")
    }
    var table = document.querySelector("tbody")
    var tr_kisi = document.createElement("tr")
    table.appendChild(tr_kisi)
    tr_kisi.setAttribute("id","person")

    var td_merkez = document.createElement("td")
    var td_gorev = document.createElement("td")
    var td_basla = document.createElement("td")
    var td_bitis = document.createElement("td")
    var td_sure = document.createElement("td")
    var td_kanun = document.createElement("td")

    tr_kisi.appendChild(td_merkez)
    tr_kisi.appendChild(td_gorev)
    tr_kisi.appendChild(td_basla)
    tr_kisi.appendChild(td_bitis)
    tr_kisi.appendChild(td_sure)
    tr_kisi.appendChild(td_kanun)

    td_merkez.textContent = todo.merkez
    td_gorev.textContent = todo.alan
    td_basla.textContent = todo.baslangıc_tarih
    td_bitis.textContent = todo.bitis_tarih
    td_sure.textContent = todo.sure
    td_kanun.textContent = todo.kanun
}


const startConf = () => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (!todos) {
        localStorage.setItem("todos",JSON.stringify([]))
    }else{
        todos.forEach(todo => {
            yazma(todo)
        } )
    }
    deleteBtns = document.querySelectorAll(".delete")
    editBtns = document.querySelectorAll(".replace")
    console.log(deleteBtns)
}
startConf()
function add(){

    

    text = gorev.value + " - " + ad.value + " | " + cikis_date.value + " | "+ kanun.value

    merkez_secim = merkez.value
    const todo = {
        text : text,
        merkez : merkez_secim,
        alan : gorev.value,
        sure : yıl.value,
        isim : ad.value,
        kanun : kanun.value,
        baslangıc_tarih : giris_date.value,
        bitis_tarih : cikis_date.value
    }

    const todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
    console.log(todos)
    

    yazma(todo)

    merkez.value= ""
    giris_date.value = ""
    gorev.value = ""
    cikis_date.value = ""
    yıl.value = ""
    ad.value = ""
    kanun.value = ""

    
}
const deleteTodo = (e) => {
    const todo = e.target.parentElement.parentElement
    const text_sor = todo.firstChild.textContent
    let todos = JSON.parse(localStorage.getItem("todos"))

    todos = todos.filter(td => td.text != text_sor)
    localStorage.setItem("todos",JSON.stringify(todos))
    todo.remove();
}

const editTodo = (e) => {
    const todo = e.target.parentElement.parentElement
    const text_sor = todo.firstChild.textContent
    let todos = JSON.parse(localStorage.getItem("todos"))

    todos = todos.filter(td => td.text != text_sor)
    localStorage.setItem("todos",JSON.stringify(todos))
    todo.remove();
    window.location.href = "person_main.html#islem"
    var parca = text_sor.split("|")
    var parcala = parca[0].split(" - ")

    gorev.value = parcala[0]
    ad.value = parcala[1]
    kanun.value = parca[2]
}



deleteBtns.forEach(btn => btn.addEventListener("click",deleteTodo))
editBtns.forEach(btn => btn.addEventListener("click",editTodo))
