fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (vestiti) {
    vestiti.forEach(function (item) {
        var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(vestiti);
    });
});
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return Math.floor(this.prezzoivainclusa * (this.saldo / 100));
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return Math.floor(this.prezzoivainclusa - this.getsaldocapo());
    };
    return Abbigliamento;
}());
var levis = new Abbigliamento(6, 1372, "inverno", "jeans", 888, 26, "blue", 100, 122, "magazzino", 20);
console.log(levis);
console.log(levis.getsaldocapo());
console.log(levis.getacquistocapo());
var ralphlauren = new Abbigliamento(7, 993, "estate", "polo", 1420, 10, "white", 50, 61, "magazzino", 50);
console.log(ralphlauren);
console.log(ralphlauren.getsaldocapo());
console.log(ralphlauren.getacquistocapo());
var tommyhilfiger = new Abbigliamento(8, 777, "autunno", "camicia", 1000, 70, "light-blue", 200, 244, "magazzino", 40);
console.log(tommyhilfiger);
console.log(tommyhilfiger.getsaldocapo());
console.log(tommyhilfiger.getacquistocapo());
