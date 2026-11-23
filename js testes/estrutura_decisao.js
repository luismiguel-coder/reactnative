let n1 = prompt("Digite um número:");
let n2 = prompt("Digite outro número:");

if (n1 === n2) {
    alert(`O número ${n1} é igual a número ${n2}`);
} else if(n1 > n2) {
    alert(`O número ${n1} é maior que o número ${n2}`);
} else if (n1 < n2) {
    alert(`O número ${n1} é menor que o número ${n2}`);
} else {
    alert("Os números não são iguais");
}
