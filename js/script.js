let clear;

function carregarJogo() {

    document.querySelector('#btn-jogar').setAttribute('disabled', '')

    document.querySelector('.player-t').classList.add('d-none')
    document.querySelector('.player-pa').classList.add('d-none')
    document.querySelector('.player-pe').classList.add('d-none')
    document.querySelector('.cpu-t').classList.add('d-none')
    document.querySelector('.cpu-pa').classList.add('d-none')
    document.querySelector('.cpu-pe').classList.add('d-none')

    let i = 0;
    let number = 3;

    clear = setInterval(() => {
        let count_down = document.querySelector('#count-down');

        count_down.innerHTML = number;

        count_down.style.display = 'block';

        setTimeout(() => {
            count_down.style.display = 'none';
        }, 600)

        i++;
        number--;

        if (i == 3) {
            limparInterval();

            rodarJogo()
        }
    }, 1500);

}

function rodarJogo() {

    let playerNumber = document.querySelector('.selected').getAttribute('data-key')
    let cpuNumber = 0;

    let spanPlayerPedra = document.querySelector('.player-pe')
    let spanPlayerPapel = document.querySelector('.player-pa')
    let spanPlayerTesoura = document.querySelector('.player-t')

    let spanCpuPedra = document.querySelector('.cpu-pe')
    let spanCpuPapel = document.querySelector('.cpu-pa')
    let spanCpuTesoura = document.querySelector('.cpu-t')

    let resultado = document.querySelector('#resultado')

    let spanPontosPlayer = document.querySelector('.pontos-player')
    let spanPontosCpu = document.querySelector('.pontos-cpu')
    let pontosPlayer = parseInt(spanPontosPlayer.innerHTML)
    let pontosCpu = parseInt(spanPontosCpu.innerHTML)

    spanPlayerPedra.classList.add('d-none')
    spanPlayerPapel.classList.add('d-none')
    spanPlayerTesoura.classList.add('d-none')

    spanCpuPedra.classList.add('d-none')
    spanCpuPapel.classList.add('d-none')
    spanCpuTesoura.classList.add('d-none')

    console.log(typeof (pontosPlayer) + ' ' + typeof (pontosCpu))

    switch (playerNumber) {
        case 1:
            spanPlayerPedra.classList.remove('d-none')
            break
        case 2:
            spanPlayerPapel.classList.remove('d-none')
            break
        case 3:
            spanPlayerTesoura.classList.remove('d-none')
            break
    }

    while (cpuNumber == 0) {
        cpuNumber = pegarValorPraCpu()
    }

    if (playerNumber == 1 && cpuNumber == 1) {
        spanPlayerPedra.classList.remove('d-none')
        spanCpuPedra.classList.remove('d-none')
        resultado.innerHTML = "EMPATE!"
    }
    else if (playerNumber == 1 && cpuNumber == 2) {
        spanPlayerPedra.classList.remove('d-none')
        spanCpuPapel.classList.remove('d-none')
        resultado.innerHTML = "CPU VENCEU KK!"
        pontosCpu += 1
        spanPontosCpu.innerHTML = pontosCpu
    }
    else if (playerNumber == 1 && cpuNumber == 3) {
        spanPlayerPedra.classList.remove('d-none')
        spanCpuTesoura.classList.remove('d-none')
        resultado.innerHTML = "PLAYER VENCEU!"
        pontosPlayer += 1
        spanPontosPlayer.innerHTML = pontosPlayer
    }
    else if (playerNumber == 2 && cpuNumber == 1) {
        spanPlayerPapel.classList.remove('d-none')
        spanCpuPedra.classList.remove('d-none')
        resultado.innerHTML = "PLAYER VENCEU!"
        pontosPlayer += 1
        spanPontosPlayer.innerHTML = pontosPlayer
    }
    else if (playerNumber == 2 && cpuNumber == 2) {
        spanPlayerPapel.classList.remove('d-none')
        spanCpuPapel.classList.remove('d-none')
        resultado.innerHTML = "EMPATE!"
    }
    else if (playerNumber == 2 && cpuNumber == 3) {
        spanPlayerPapel.classList.remove('d-none')
        spanCpuTesoura.classList.remove('d-none')
        resultado.innerHTML = "CPU VENCEU!"
        pontosCpu += 1
        spanPontosCpu.innerHTML = pontosCpu
    }
    else if (playerNumber == 3 && cpuNumber == 1) {
        spanPlayerTesoura.classList.remove('d-none')
        spanCpuPedra.classList.remove('d-none')
        resultado.innerHTML = "CPU VENCEU!"
        pontosCpu += 1
        spanPontosCpu.innerHTML = pontosCpu
    }
    else if (playerNumber == 3 && cpuNumber == 2) {
        spanPlayerTesoura.classList.remove('d-none')
        spanCpuPapel.classList.remove('d-none')
        resultado.innerHTML = "PLAYER VENCEU!"
        pontosPlayer += 1
        spanPontosPlayer.innerHTML = pontosPlayer
    }
    else {
        spanPlayerTesoura.classList.remove('d-none')
        spanCpuTesoura.classList.remove('d-none')
        resultado.innerHTML = "EMPATE!"
    }

    document.querySelector('#btn-jogar').removeAttribute('disabled')
}   

function pegarValorPraCpu() {

    return Math.round(Math.random() * 10 / 3)
}

function selecionarJokenpo(item) {
    let btnPedra = document.querySelector('#btn-pedra')
    let btnPapel = document.querySelector('#btn-papel')
    let btnTesoura = document.querySelector('#btn-tesoura')


    btnPedra.classList.remove('selected')
    btnPapel.classList.remove('selected')
    btnTesoura.classList.remove('selected')

    item.classList.add('selected')

    document.querySelector('#btn-jogar').removeAttribute('disabled')
    document.querySelector('.jogar span').style.display = 'none'
    /*
    escolhaPlayer = item.getAttribute('data-key')

    return escolhaPlayer
    */
}

function limparInterval() {
    clearInterval(clear);
}
