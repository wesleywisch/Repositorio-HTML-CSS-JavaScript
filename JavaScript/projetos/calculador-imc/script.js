

function calcular(){
    // funcionalidade

    let inputA = document.getElementById("Altura").value;
    let inputP = document.getElementById("PesoKg").value;
    let res = (Math.pow(inputA, 2)) / inputP;
    document.getElementById("res").value = res;

    // obsevando se os campos foram preenchidos

    let campoA = document.getElementById("Altura");
    let campoB = document.getElementById("PesoKg");

    if(campoA.value == "" || campoB.value == ""){
        alert("Por favor preencher os campos!")
    }
}

