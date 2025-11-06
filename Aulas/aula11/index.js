window.alert('Mensagem de alerta da aula 11!')
window.confirm('Mensagem de confirmação da aula11!');
window.prompt('Mensagem de prompt da aula 11!')

const num1 = prompt('Digite o primeiro número:');
const num2 = prompt('Digite o segundo número:');

num1Float = parseFloat(num1);
num2Float = parseFloat(num2);

const resultado = num1Float + num2Float;

alert(`O resultado da soma entre ${num1Float} e ${num2Float} é: ${resultado}`);
