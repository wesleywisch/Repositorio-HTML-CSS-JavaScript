function carregar() {
var msg = window.document.getElementById(`msg`)
var img = window.document.getElementById(`imagem`)
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora sao ${hora} horas.`
if(hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = `imagens/fotomanha.png`
        document.body.style.background = `#c4dbe3`
    }else if (hora >=12 && hora <= 18) {
        //Boa tarde!
        img.src = `imagens/fototarde.png`
        document.body.style.background = `#fbba82`
    } else {
        //Boa noite!
        img.src = `imagens/fotonoite.png`
        document.body.style.background = `#176caa`
    }
}