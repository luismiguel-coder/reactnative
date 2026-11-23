let menu = prompt("Deseja Fazer uma operação? (1 - Sim / 2 - Não)");

while (menu == 1 ) {
    let operacao = prompt("Qual operação deseja fazer? (1 - Soma / 2 - Subtração / 3 - Multiplicação / 4 - Divisão)");

    if (operacao == 1) {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado = num1 + num2;
        alert("O resultado da soma é: " + resultado);
   
    } else if (operacao == 2) {

        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado = num1 - num2;
        alert("O resultado da subtração é: " + resultado);
   
    } else if (operacao == 3) {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado = num1 * num2;
        alert("O resultado da multiplicação é: " + resultado);
   
    }  else if (operacao == 4) {
   
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));  
        let resultado = num1 / num2;        
        alert("O resultado da divisão é: " + resultado);
    }
    
    menu = prompt("Deseja fazer outra operação? (1 - Sim / 2 - Não)");
        if (menu == 2) {
            alert("Obrigado por usar a calculadora!");      
            break;    
        }
        
}