function configuraCarrossel(carrossel) {
    let departamentoAtual = 0;

    const botaoProximo = carrossel.querySelector('[data-carrossel-button-next]');

    const botaoAnterior = carrossel.querySelector('[data-carrossel-button-prev]');

    const departamentos = carrossel.querySelector('[data-carrossel-container-departamentos]');

    const numeroDepartamentos = departamentos.children.length;

    function departamentoProximo() {
        if(departamentoAtual++ == numeroDepartamentos - 1){
            departamentoAtual = 0;
        }

        carrossel.style.setProperty('--departamento-atual', departamentoAtual);
    }

    function departamentoAnterior() {
        if(departamentoAtual-- == 0){
            departamentoAtual = numeroDepartamentos - 1;
        }

        carrossel.style.setProperty('--departamento-atual', departamentoAtual);
    }

    botaoProximo.addEventListener('click', departamentoProximo);

    botaoAnterior.addEventListener('click', departamentoAnterior);
}


const carroceis = document.querySelectorAll('[data-carrossel]');

carroceis.forEach(configuraCarrossel);
