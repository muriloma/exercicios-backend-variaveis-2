let m = 90_000, c = 60_000, n = 24;
let i = (((m / c) ** (1 / n)) - 1) * 100;
i = i.toFixed(3);
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i}%, pois após ${n} meses você teve que pagar ${m} reais.`);