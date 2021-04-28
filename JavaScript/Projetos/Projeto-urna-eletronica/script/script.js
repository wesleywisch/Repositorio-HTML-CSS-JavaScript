
let painel = document.getElementById("painel");

function insert(num){
    let numero = document.getElementById("numero").innerHTML;
    document.getElementById("numero").innerHTML = numero + num;
}

function corrige(){
    if(painel.innerHTML == "<p>Votar nulo?</p>" || painel.innerHTML == "<p>Votar branco?</p>"){
        painel = ""
    }
}

function branco(){
    painel.innerHTML = "<p>Votar branco?</p>"
}

function verificar(){
    let numero = document.getElementById("numero").innerHTML;
    if(numero == "17" || numero == "13" || numero == "12" || numero == "45"){
        painel.innerHTML = "<p>Voto computado</p>"
    }else{
        painel.innerHTML = "<p>Votar nulo?</p>"
    }
}

function confirma(){ 
    if(painel.innerHTML == "<p>Votar nulo?</p>"){
        painel.innerHTML = "<p>Voto computado</p>"
        return
    }
    if(painel.innerHTML == "<p>Votar branco?</p>"){
        painel.innerHTML = "<p>Voto computado</p>"
        return
    }
    verificar()
}
