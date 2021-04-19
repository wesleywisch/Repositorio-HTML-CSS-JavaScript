
let audio = document.getElementsByClassName("audio1")[0]


function play(){
    audio.play();
}

function stop(){
    audio.pause()
}

function passar10(){
    audio.currentTime += 10;
}

function voltar10(){
    audio.currentTime -= 10;
}

function voltarMusica(){

}

function pularMusica(){

}

function volume(){
    audio.volume = 1
    // if(volume >= "0.7"){
    //     img.src = "./imagens/volumenormal.png"
    // }else if(volume <= "0.6" || volume >= "0.1"){
    //     img.src = "./imagens/volumebaixo.png"
    // }else if(volume = "0"){
    //     img.src = "mute.png"
    // }
}
