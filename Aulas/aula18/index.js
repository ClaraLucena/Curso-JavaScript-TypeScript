// class é selecionada com ponto ., id é selecionado com #, tag selecionada com tag

function meuEscopo() {
    const form = document.querySelector('.form'); //pega o formulário, selecionando pela classe
    const resultado = document.querySelector('.resultado');
    /*form.onsubmit = function (evento) {
        evento.preventDefault(); //previne o comportamento padrão do formulário (recarregar a página)
        alert('1');
        console.log("Foi enviado")
    }*/
   const pessoas =[]
    function recebeEventoForm(evento) {

        evento.preventDefault(); //previne o comportamento padrão do formulário (recarregar a página)
        const nome = form.querySelector('.nome'); //pega o campo nome dentro do form
        const sobrenome = form.querySelector('.sobrenome'); //pega o campo sobrenome dentro do form         
        const peso = form.querySelector('.peso'); //pega o campo peso dentro do form
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
    
}
meuEscopo();
