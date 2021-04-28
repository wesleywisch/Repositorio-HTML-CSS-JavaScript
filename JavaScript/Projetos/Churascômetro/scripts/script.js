// carne - 400 gramas para Homem    +6 horas de duração - 650
// carne - 300 gramas para Mulher   +6 horas de duração - 550
// cerveja - 1200 ml por pessoa    +6 horas de duração - 2000 ml
// refrigerante - 1000 ml por pessoa    +6 horas de duração - 1500 ml

// criança valem por 0,5 criança - sao 200 gramas de carne +6 horas - 350

let inputHomem = document.getElementById("Homem");
let inputMulher = document.getElementById("Mulher");
let inputCrianca = document.getElementById("Crianca");
let inputDuracao = document.getElementById("Horas");


function calcular(){

    // calculo da carne
    let Homem = inputHomem.value;
    let Mulher = inputMulher.value;
    let Criancas = inputCrianca.value;
    let Horas = inputDuracao.value;

    if(Horas == 0){
        alert("Este campo não pode estar vazio, por favor preenche-lo!");
        return
    }

    let CarneHomem = Horas >= 6 ? 650 : 400;
    let CarneMulher = Horas >= 6 ? 550 : 300;
    let CarneCrianca = Horas >= 6 ? 350 : 200;

    let quantidadeTotalCarne = (CarneHomem * Homem) + (CarneMulher * Mulher) + (CarneCrianca * Criancas);
    quantidadeTotalCarne = `${(quantidadeTotalCarne / 1000).toFixed(2)} Kg de Carne`

    document.getElementById("rescarne").value = quantidadeTotalCarne;
    

    // calculo do refrigerante e cerveja
    // calculo da cerveja que nao engloba as crianças

    let Cerveja = Horas >= 6 ? 2000 : 1200;

    let quantidadeTotalCerveja = (Cerveja * Homem) + (Cerveja * Mulher);
    quantidadeTotalCerveja = `${Math.ceil((quantidadeTotalCerveja / 355))} Latinhas de Cerveja`
    document.getElementById("rescerveja").value = quantidadeTotalCerveja;

    //calculo do refrigerante que engloba as crianças

    let refrigerante = Horas >= 6 ? 1500 : 1000;
    
    let quantidadeTotalRefrigerante = (refrigerante * Homem) + (refrigerante * Mulher) + (refrigerante * Criancas / 2);
    quantidadeTotalRefrigerante = `${Math.ceil((quantidadeTotalRefrigerante / 2000))} Garrafas de bebidas de 2L`
    document.getElementById("resrefrigerante").value = quantidadeTotalRefrigerante;

    MostradorResultado()

    // funciona para quando clicar em calcular e quando voltar os inputs estiverem limpos

    inputHomem.value = ""
    inputMulher.value = ""
    inputCrianca.value = ""
    inputDuracao.value = ""
}

// motrar o resultado

function MostradorResultado(){
    let mostrador = document.getElementsByClassName('abrir');
    for (let i=0;i<mostrador.length;i+=1){
        mostrador[i].style.display = 'block';
    }
}

//volta para o painel principal

function Setavoltar(){
    let mostrador = document.getElementsByClassName('abrir');
    for (let i=0;i<mostrador.length;i+=1){
        mostrador[i].style.display = 'none';
    } 
}

// função para quando apertar o enter tbm funcinar e não so com o mouse

document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.getElementById("enter").click();
    }
});
