
let painel = document.getElementById("painel");

function insert(num){
    let numero = document.getElementById("numero").innerHTML;
    document.getElementById("numero").innerHTML = numero + num;
}

function corrige(){
    if(painel.innerHTML == "Votar branco?"){
        innerHTML = painel
    }else if(painel.innerHTML == "Votar nulo?"){
        innerHTML = painel
    }else if(painel.innerHTML == "Voto computado"){
        innerHTML = painel
        return
    }
}

function branco(){
    painel.innerHTML = "Votar branco?"
}


function confirma(){ 
    if(painel.innerHTML == "Votar branco?"){
        painel.innerHTML = "Voto computado"
        return
    }


    let numero = document.getElementById("numero").innerHTML;
    if(numero == "17" || numero == "13" || numero == "12" || numero == "45"){
        painel.innerHTML = "Voto computado"
    }else if(painel.innerHTML = "Votar nulo?"){
        painel.innerHTML = "Voto computado"
    }
}
