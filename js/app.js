var campoBolas = document.getElementById("CampoBolas");
var velocidade;
var pontuador = 0;
var contador = 0;
var tempoAddBola;

function init() {
    velocidade = document.getElementById("velocidade").value;
    if (document.getElementById("maxBola").value.length == 0) {
        alert("Insira a quantidade de bolas para prosseguirmos!");
    }
    else {
        switch (velocidade) {
        case "1":
            tempoAddBola = setInterval(addBola, 1200);
            break;
        case "2":
            tempoAddBola = setInterval(addBola, 1000);
            break;
        case "3":
            tempoAddBola = setInterval(addBola, 800);
            break;
        case "4":
            tempoAddBola = setInterval(addBola, 600);
            break;
        case "5":
            tempoAddBola = setInterval(addBola, 450);
            break;
        default:
            alert("SELECIONE UMA VELOCIDADE PARA INICIARMOS!")
        }
    }
}

function addBola() {
    var divBola = document.createElement("div");
    divBola.setAttribute("class", "bola");
    //posicao da bola
    var x = Math.floor(Math.random() * 900);
    var y = Math.floor(Math.random() * 550);
    //cor da bola
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    divBola.setAttribute("style", "left:" + x + "px;top:" + y + "px;background-color:rgb(" + r + "," + g + "," + b + ")");
    divBola.setAttribute("onclick", "estourar(this)");
    campoBolas.appendChild(divBola);
    //pegando quantidade de bolas
    var maxBola = document.getElementById("maxBola").value;
    contador++;
    if (contador == maxBola) {
        alert("Numero maximo de bolas atingido");
        clearInterval(tempoAddBola);
    }
}

function estourar(objeto) {
    campoBolas.removeChild(objeto);
    pontuador++;
    document.getElementById("pontuador").innerHTML = pontuador;
}