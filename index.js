let nomeDoCliente = prompt('Insira seu nome:');

console.log('Compras de ', nomeDoCliente);

let produto1 = 'Shampoo';
let marcaProduto1 = 'Seda';
let precoProduto1 = '7.50';

console.log(' Produto 1: ', produto1, '\n', 'Marca do produto: ', marcaProduto1, '\n', 'Preço: ', precoProduto1, '\n');

let produto2 = 'Condicionador';
let marcaProduto2 = 'Pantene';
let precoProduto2 = '16.25';
// let maisCaro = parseFloat(precoProduto2) > parseFloat(precoProduto1)

// console.log(maisCaro)

console.log(' Produto 2: ', produto2, '\n', 'Marca do produto: ', marcaProduto2, '\n', 'Preço: ', precoProduto2, '\n');

let totalCompra = parseFloat(precoProduto1) + parseFloat(precoProduto2);

console.log('Total de compras de', nomeDoCliente, 'é', totalCompra);

const TAXA_IMPOSTO = 0.10 * totalCompra;
const TAXA_FRETE = 0.15 * totalCompra;

let distancia = prompt('Insira a distância até sua casa: ');

let frete = TAXA_FRETE * parseFloat(distancia);
let imposto = frete + TAXA_IMPOSTO;

console.log('Frete: ', frete, '\n', 'Imposto: ', imposto);

let totalFinal = totalCompra + frete + imposto

console.log('O preço final da compra é: ', totalFinal.toFixed(2))

