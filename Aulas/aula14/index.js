let numero = prompt("Digite um número:"); //precisa converter para number se quiser fazer operações matemáticas
numero = Number(numero); //conversão para number
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");


numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>${numero} é NaN: ${isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondo para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondo para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`