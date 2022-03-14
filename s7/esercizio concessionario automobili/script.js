class Auto {
    constructor(id, nomeAuto, anno, carburante, colore, km, origine, vel, foto, prezzo) {
        this.id = id;
        this.nome = nomeAuto;
        this.anno = anno;
        this.carburante = carburante;
        this.colore = colore;
        this.km = km;
        this.origine = origine;
        this.vel = vel;
        this.foto = foto;
        this.prezzo = prezzo;
    }
}
var veicoli = [];
var select;
function init() {

    var auto1 = new Auto(1, "FIAT 500 X", 2021, "Diesel", "Rosso", 1200, "Italia", "120Km/h", "500x.png", "€ 18.000,00");

    var auto2 = new Auto(2, "BMW x1", 2022, "Diesel", "Blu", 0, "Germania", "220 Km/h", "bmw_x1.png", "€ 31.000,00");

    var auto3 = new Auto(3, "JEEP COMPASS 4xe", 2021, "Benzina", "Grigio", 0, "USA", "190 Km/h", "jeep_compass_4xe.png", "€ 45.500,00");

    var auto4 = new Auto(4, "JEEP COMPASS", 2021, "Diesel", "Blu", 500, "USA", "130 Km/h", "jeep_compass.png", "€ 35.000,00");

    var auto5 = new Auto(5, "JEEP RENEGADE LIMITED", 2019, "Diesel", "Bianca", 80, "USA", "120 Km/h", "jeep_renegade.png", "€ 28.650,00");

    var auto6 = new Auto(6, "JEEP WRANGLER", 2000, "Benzina", "Bianca", 0, "USA", "190 Km/h", "jeep_wrangler.png", "€ 60.500,00");

    var auto7 = new Auto(7, "WOLKSWAGEN T-CROSS", 2021, "Diesel", "Bianca", 0, "Germania", "190 Km/h", "tcross.png", "€ 32.000,00");

    veicoli.push(auto1, auto2, auto3, auto4, auto5, auto6, auto7);
    populateSelectOptions();
}

init();

function populateSelectOptions() {
    select = document.querySelector('#auto')
    select.addEventListener('change', stampaAuto)

    for (var i = 0; i < veicoli.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', veicoli[i].id);
        option.text = veicoli[i].nome;
        select.append(option);
    }
}

function stampaAuto() {

try{
    var idAutoSelezionata = select.value;
    let autoselezionata = veicoli.find(auto => auto.id == idAutoSelezionata);
    console.log(autoselezionata)
   /* let autoselezionata;
    for( var i = 0; i < veicoli.length; i++){
        if (veicoli[i].id == idAutoSelezionata){
            autoselezionata = veicoli[i]
        }
    } questo è la stessa cosa della funzione con find*/
    document.querySelector('#NomeAutovettura').innerHTML = autoselezionata.nome
    document.querySelector('#AnnoImmatricolazione').innerHTML = autoselezionata.anno
    document.querySelector('#TipoCarburante').innerHTML = autoselezionata.carburante
    document.querySelector('#Colore').innerHTML = autoselezionata.colore
    document.querySelector('#Km').innerHTML = autoselezionata.km
    document.querySelector('#PaeseProduzione').innerHTML = autoselezionata.origine
    document.querySelector('#Cavalli').innerHTML = autoselezionata.vel
    document.querySelector('#immagineAutoSelezionata').setAttribute('src', 'img/' + autoselezionata.foto)
    document.querySelector('#PrezzoVendita').innerHTML = autoselezionata.prezzo

}catch{
    document.querySelector('#NomeAutovettura').innerHTML = ''
    document.querySelector('#AnnoImmatricolazione').innerHTML = ''
    document.querySelector('#TipoCarburante').innerHTML = ''
    document.querySelector('#Colore').innerHTML = ''
    document.querySelector('#Km').innerHTML = ''
    document.querySelector('#PaeseProduzione').innerHTML = ''
    document.querySelector('#Cavalli').innerHTML = ''
    document.querySelector('#immagineAutoSelezionata').setAttribute('src', '' )
    document.querySelector('#PrezzoVendita').innerHTML = ''
}

    


}
