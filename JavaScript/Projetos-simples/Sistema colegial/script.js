var nomes = ["Igor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];


function media(n1,n2){
    return(n1 + n2)/2;
}


function passou(media){

    if(media >= 7){
        return "Aprovado";
    }else{
        return "Reprovado";
    }

}


for(var index in nomes){

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2);

    console.log(nomes[index] + 
    ", Primeira nota: " + 
    nota1 + 
    ", Segunda nota: " + 
    nota2 + 
    ", Sua média foi: " +
    m +
    ", Situação: " +
    passou(m) );

}