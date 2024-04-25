let nomeDoCliente = prompt('Insira seu nome:');

let produto1 = 'Shampoo';
let marcaProduto1 = 'Seda';
let precoProduto1 = '7.50';

console.log(nomeDoCliente, ' comprou um ', produto1, 'da marca', marcaProduto1, 'que custa', precoProduto1, )

let produto2 = 'Condicionador';
let marcaProduto2 = 'Pantene';
let precoProduto2 = '16.25'
let maisCaro = parseFloat(precoProduto2) > parseFloat(precoProduto1)

console.log(maisCaro)

