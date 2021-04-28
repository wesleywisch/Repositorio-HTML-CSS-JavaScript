let pBimestre = 0.0;
let sBimestre = 1.0;
let tBimestre = 1.0;
let qBimestre = 0.0;

let notas = pBimestre + sBimestre + tBimestre + qBimestre

let media = notas / 4


if (media >= 7 && media <= 10){
    console.log("Parabéns você foi aprovado")
} else if (media >= 2.1 && media <=6.9) {
    console.log("Infelismente ficou de recuperação, mais corre atras que ainda da tempo.")
} else if (media <=2 && media >=0) {
    console.log("Infelismente foi você foi reprovado")
}