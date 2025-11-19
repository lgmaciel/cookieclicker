const quantCookies = document.querySelector("#quant-cookies");
const imgCookie = document.querySelector("#img-cookie");

//valor do placar
let valorQuantCookies = 0
quantCookies.value = valorQuantCookies;

imgCookie.addEventListener("click", atualizarJogo)

function atualizarQuantCookies() {
    //atualizando valor do placar
    valorQuantCookies = valorQuantCookies + 1
    //mostrando novo valor do placar
    quantCookies.value = valorQuantCookies
}

function atualizarJogo() {

    atualizarQuantCookies()

    // Regras do jogo

    if(valorQuantCookies >= 10) {
        const imgCursor = document.querySelector("#img-cursor");
        imgCursor.style.borderColor = "red";
    }


    if(valorQuantCookies >= 50) {
        const imgCursor = document.querySelector("#img-vovo");
        imgCursor.style.borderColor = "red";
    }

}