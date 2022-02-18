var operazioneCliccata = false;

function tasti(valore) {

    if (valore == "+" || valore == "-" || valore == "*" || valore == "/") {
        if (operazioneCliccata == false) {
            document.getElementById("ok").value += valore;
            operazioneCliccata = true;
        }
    }

    if (Number.isInteger(valore) || valore == ".") {
        document.getElementById("ok").value += valore;
    }
}

function operazione() {
    document.getElementById("ok").value = eval(document.getElementById("ok").value);
    operazioneCliccata = false;
}

function cancella() {
    document.getElementById("ok").value = "";
    operazioneCliccata = false;
}