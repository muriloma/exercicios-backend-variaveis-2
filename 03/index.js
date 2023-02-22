let dinheiro = 80;
let tenis = 129.99;
let valorDesconto = tenis - dinheiro;
let taxaDesconto = (valorDesconto * 100) / tenis
taxaDesconto = taxaDesconto.toFixed(0)
console.log(`Para a compra do tenis seria necessário um desconto de aproximadamente ${taxaDesconto}%`)