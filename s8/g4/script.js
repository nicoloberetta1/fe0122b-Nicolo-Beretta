var FirstUser = /** @class */ (function () {
    function FirstUser(carica) {
        this.numeroChiamate = 0;
        this.carica = carica;
    }
    FirstUser.prototype.chiamata = function (minuti) {
        this.carica -= 0.20 * minuti;
        this.numeroChiamate += 1;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    FirstUser.prototype.ricarica = function (euro) {
        this.carica += euro;
    };
    return FirstUser;
}());
var user = new FirstUser(10);
user.chiamata(20);
console.log(user);
user.ricarica(15);
console.log(user);
user.chiamata(5);
console.log(user);
user.getNumeroChiamate();
console.log(user);
user.azzeraChiamate();
console.log(user);
