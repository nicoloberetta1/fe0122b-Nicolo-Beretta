var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var y = document.getElementById('btn');
y.addEventListener('click', function () {
    var z = document.querySelector('#redditoLordo').value;
    var tasse = /** @class */ (function () {
        function tasse(redditoannuolordo, tasseinps, tasseirpef) {
            this.redditoannuolordo = redditoannuolordo;
            this.tasseinps = tasseinps;
            this.tasseirpef = tasseirpef;
        }
        return tasse;
    }());
    var Inps = /** @class */ (function (_super) {
        __extends(Inps, _super);
        function Inps(redditoannuolordo, tasseinps, tasseirpef) {
            return _super.call(this, redditoannuolordo, tasseinps, tasseirpef) || this;
        }
        Inps.prototype.getTasseInps = function () {
            return (this.redditoannuolordo * this.tasseinps) / 100;
        };
        Inps.prototype.getTasseIrpef = function () {
            return (this.redditoannuolordo * this.tasseirpef) / 100;
        };
        Inps.prototype.getRedditoAnnuoNetto = function () {
            return this.redditoannuolordo - ((this.redditoannuolordo * this.tasseinps) / 100 + (this.redditoannuolordo * this.tasseirpef) / 100);
        };
        return Inps;
    }(tasse));
    var inps = new Inps(z, 10, 10);
    var a = inps.getTasseInps();
    var b = inps.getTasseIrpef();
    var c = inps.getRedditoAnnuoNetto();
    /*console.log(a);
    console.log(b);
    console.log(c);*/
    var d = document.getElementById('tasseInps');
    var e = document.getElementById('tasseIrpef');
    var f = document.getElementById('redditoNetto');
    d.value = a;
    e.value = b;
    f.value = c;
});
