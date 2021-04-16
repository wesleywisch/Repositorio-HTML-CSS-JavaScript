

function calcular(){
    // funcionalidade

    let altura = parseFloat(document.getElementById("Altura").value);
    let peso = parseFloat(document.getElementById("PesoKg").value);
    let resultado = peso / (altura * altura)
    document.getElementById("res").value = resultado;

    // obsevando se os campos foram preenchidos

    let campoA = document.getElementById("Altura");
    let campoB = document.getElementById("PesoKg");

    if(campoA.value == "" || campoB.value == ""){
        alert("Por favor preencher os campos!")
    }
}

