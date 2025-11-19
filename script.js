const quantCookies = document.querySelector("#quant-cookies");
const imgCookie = document.querySelector("#img-cookie");

//valor do placar
let valorQuantCookies = 0
quantCookies.value = valorQuantCookies;

imgCookie.addEventListener("click", atualizarQuantCookies)

function atualizarQuantCookies() {
    //atualizando valor do placar
    valorQuantCookies = valorQuantCookies + 1
    //mostrando novo valor do placar
    quantCookies.value = valorQuantCookies
}