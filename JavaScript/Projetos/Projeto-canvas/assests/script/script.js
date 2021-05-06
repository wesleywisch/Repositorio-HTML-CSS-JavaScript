
    const tela = document.querySelector("#tela");
    const contexto = tela.getContext("2d");
    const pincel = {
        ativo: false,
        movimento: false,
        pos: { x: 0, y: 0 },
        posAnterior: null
    }

    tela.width = 700;
    tela.height = 500;

    contexto.lineWidth = 1;
    contexto.strokeStyle = "black"

    const desenharLinha = (linha) => { 

        contexto.beginPath();
        contexto.moveTo(linha.posAnterior.x, linha.posAnterior.y);
        contexto.lineTo(linha.pos.x, linha.pos.y);
        contexto.stroke();
    }

    tela.onmousedown = () => { pincel.ativo = true };
    tela.onmouseup = () => { pincel.ativo = false };

    tela.onmousemove = (evento) => {
        pincel.pos.x = evento.clientX
        pincel.pos.y = evento.clientY
        pincel.movimento = true;
    };

    const ciclo = () => {
        if (pincel.ativo && pincel.movimento && pincel.posAnterior) {
            desenharLinha({ pos: pincel.pos, posAnterior: pincel.posAnterior });
            pincel.movimento = false;
        }
        pincel.posAnterior = { x: pincel.pos.x, y: pincel.pos.y };

        setTimeout(ciclo, 10);
    }
    ciclo()


