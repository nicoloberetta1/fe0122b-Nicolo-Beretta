var elementi = [ "quaderno", "penna", "telefono", "biglietto", "computer" ];
var stringa = "ciao come stai ?";
var maiuscolo = stringa.toUpperCase();
var minuscolo = stringa.toLowerCase();
console.log(maiuscolo);
console.log(minuscolo);
var caratteri = stringa.split(' ');
console.log(caratteri);
console.log(caratteri[2]);
console.log(caratteri[0]);
var concatenati = caratteri[2].concat(' ' + caratteri[0]);
console.log(concatenati);
elementi[2];
console.log(elementi[2]);
var variabilepush = elementi.push('foto');
console.log(elementi);
var variabileunshift = elementi.unshift('carta');
console.log(elementi);
console.log(elementi.length);
var numeri = [ 1, 2, 3, 4, 5 ];
/*function operazioni(){
    numeri[0] + numeri[3];
}
console.log(operazioni());*/
function operazioni (){
    console.log(operazioni= numeri[1] + numeri[3])
}
operazioni();
var varpop = numeri.pop();
console.log(varpop);
var varpush = numeri.push(6);
console.log(varpush);
var varshift = numeri.shift();
console.log(varshift);
var varunshift = numeri.unshift(0);
console.log(varunshift);