let peso = prompt("Digite o peso em kg:");

let altura = prompt("Digite a altura em metros:");
let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert("Abaixo do peso: " + imc);
} else if (imc >= 18.5 && imc < 25) {
    alert("Peso normal: " + imc);
} else if (imc >= 25 && imc < 30) {
    alert("Sobrepeso: " + imc.toFixed(2));
    alert("Procure um médico para avaliação.");
} else if (imc >= 30 && imc < 35) {
    alert("Obesidade Grau I: " + imc);
    alert("Procure um médico para avaliação.");
} else if (imc >= 35 && imc < 40) {
    alert("Obesidade Grau II: " + imc);
    alert("Procure um médico para avaliação.");
} else if (imc >= 40) {
    alert("Obesidade Grau III: " + imc);
    alert("Procure um médico para avaliação.");
}

