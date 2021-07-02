var a = document.getElementById("all");
var z = document.getElementById("autumn");
var e =document.getElementById("winter");
var r =document.getElementById("spring");
var t =document.getElementById("summer");

a.addEventListener ("click", function () {

    showAll();

   

    
});
z.addEventListener ("click", function () {

    showAll();
    Hide("winter");
    Hide("spring");
    Hide("summer");

    
});
e.addEventListener ("click", function () {

   
    showAll();
    Hide("autumn");
    Hide("spring");
    Hide("summer");
});
r.addEventListener ("click", function () {

    showAll();
    Hide("autumn");
    Hide("winter");
    Hide("summer");


    
});

t.addEventListener ("click", function () {

    showAll();

    Hide("autumn");
    Hide("winter");
    Hide("spring");
    
});

function showAll() {

var show = document.querySelectorAll(".row img");
console.log(show[0]);
for (i = 0; i < show.length; i++) {

show[i].style.display = "block";

}
}

function Hide(po) {

    var show = document.querySelectorAll(".row img");
    console.log(show[0]);
    for (i = 0; i < show.length; i++) {
    if (show[i].classList.contains(po)) {
    show[i].style.display = "none";
    
    }
    }
}