while (true) {
    let menu = prompt("Deseja Fazer uma operação? (1 - soma / 2 - subtração / 3 - multiplicação / 4 - divisão / 5 - sair)");

    if (menu == 1) {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado = num1 + num2;
        alert("O resultado da soma é: " + resultado);
   
    } else if (menu == 2) {

        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado = num1 - num2;
        alert("O resultado da subtração é: " + resultado);
   
    } else if (menu == 3) {
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));
        let resultado = num1 * num2;
        alert("O resultado da multiplicação é: " + resultado);
   
    }  else if (menu == 4) {
   
        let num1 = parseFloat(prompt("Digite o primeiro número:"));
        let num2 = parseFloat(prompt("Digite o segundo número:"));  
        let resultado = num1 / num2;        
        alert("O resultado da divisão é: " + resultado);
         if (num2 === 0) {
            alert("Erro: Divisão por zero não é permitida.");
        }
    }


    if (menu == 5) {
        alert("Obrigado por usar a calculadora!");      
        break;    
    }

    else if ( menu <1 || menu > 5) {   
        alert("Opção inválida! Por favor, escolha uma opção válida.");
    }
}