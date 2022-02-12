
let loaderhtml = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"

const loader = document.createElement("div")
loader.classList.add("lds-roller")
loader.innerHTML = loaderhtml

let load = document.getElementsByClassName("load")[0]
load.appendChild(loader)

window.addEventListener("load", function(){
    document.getElementsByClassName("load")[0].style.display ="none"
    var all = document.getElementsByClassName("text");
    for (var i = 0; i < all.length; i++) {
    all[i].style.display = 'block';
    }
});

