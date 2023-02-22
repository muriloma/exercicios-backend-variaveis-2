let c = 1000, i = 0.125, t = 5;
let m = c * ((1 + i) ** t);
m = m.toFixed(0);
console.log(`O montante final após ${t} meses será de R$ ${m}`);