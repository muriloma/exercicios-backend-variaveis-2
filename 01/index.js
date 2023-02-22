// Inserindo as variáveis de peso e altura
let peso = 69, altura = 1.69;
let imc = peso / (altura ** 2);
imc = imc.toFixed(2)
console.log(`Para uma altura de ${altura}m e um peso de ${peso}kg o IMC calculado é de: ${imc}`);