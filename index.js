var valorEmDolar = 1;
var valorEmBitcoin = 3;
var cotacaoDolarReal = 5.32;
var cotacaoBitcoinReal = 117411.44;
var velocidadeLuzKm = 300000;
var velocidadeLuzMs = velocidadeLuzKm * 1000;

var valorEmReal = valorEmDolar * cotacaoDolarReal;
valorEmReal = valorEmReal.toFixed(2);
console.log("Dolar em Real: " + valorEmReal);

valorEmReal = valorEmBitcoin * cotacaoBitcoinReal;
valorEmReal = valorEmReal.toFixed(2);
console.log("Bitcoin em Real: " + valorEmReal);

console.log("Velocidade da luz em m/s: " + velocidadeLuzMs);
