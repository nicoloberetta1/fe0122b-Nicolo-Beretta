let elementiSalvati = localStorage.getItem('utenti');
let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
dataBase.forEach(elemento => {
    let riga = document.createElement('tr')
    let tableRow = document.createElement('td');
    let tableRow1 = document.createElement('td');
    let tableRow2 = document.createElement('td');
    let tableRow3 = document.createElement('td');
    let tableRow4 = document.createElement('button')
    let contenitore = document.querySelector('#table')
    tableRow.innerText = elemento.id
    tableRow1.innerText = elemento.username
    tableRow2.innerText = elemento.email
    tableRow3.innerText = elemento.password
    tableRow4.innerText = 'elimina'
    contenitore.append(riga)
    riga.append(tableRow, tableRow1, tableRow2, tableRow3, tableRow4)


    tableRow4.addEventListener('click', function () {
        eliminaUtente()
        riga.remove()
    })



});


function eliminaUtente(pippo) {
    var dato = dataBase.indexOf(pippo);
    dataBase.splice(dato, 1);
    localStorage.setItem('utenti', JSON.stringify(dataBase))
}
