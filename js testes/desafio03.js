let consumo = prompt("Digite o consumo de energia em kWh:");
const tarifa = 1.18;

let valor = consumo * tarifa;

if (valor <= 150) {
    alert("Consumo Baixo: R$ " + valor);

} else if (valor >= 300) {
    alert("Consumo Alto: R$ " + valor);
} else if ( valor < 300) {
    alert("Consumo Médio: R$ " + valor);
}