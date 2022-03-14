/*fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        data.forEach(function (elemento) {
            let tabella = document.getElementById('table')
            let contenitore = document.createElement('tr')
            let row = document.createElement('td')
            let row1 = document.createElement('td')
            let row2 = document.createElement('td')
            let row3 = document.createElement('td')
            row.innerText = elemento.name
            row1.innerText = elemento.lastname
            row2.innerText = elemento.email
            row3.innerHTML = elemento.role.nicename
            tabella.append(contenitore);
            contenitore.append(row, row1, row2, row3)
        })});
        
        let intestazione = ['Nome', 'Cognome', 'Email', 'Ruolo'];
        intestazione.forEach(titoli => {
            let tableHead = document.createElement('th');
            tabella.append(tableHead);
            tableHead.innerText = titoli;
        });*/
fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var campi = ['name', 'lastname', 'email', 'role'];

        data.forEach(function (elemento) {
            let tabella = document.querySelector('#table');

            let cancella = document.createElement('button')
            cancella.innerHTML = 'cancella'
            cancella.classList.add('delete')

            let modifica = document.createElement('a')
            modifica.innerHTML = 'modifica'
            modifica.href = '/modifica.html?id=' + elemento.id

            let tableRow = document.createElement('tr');

            tabella.append(tableRow);

            for (let prop in elemento) {
                if (campi.includes(prop)) {
                    let contenuto = typeof elemento[prop] == "object" ? elemento[prop].nicename : elemento[prop];
                    let tableData = document.createElement('td');
                    tableData.innerText = contenuto;

                    tableRow.append(tableData);
                    tableRow.append(cancella)
                    tableRow.append(modifica)
                };

            }

            var elimina = tableRow.querySelector('.delete')
            elimina.addEventListener('click', function () {

                fetch('https://sofin.wp-admin.it/public/api/v1/user/' + elemento.id, {
                    method: "DELETE",
                    headers: { 'Content-Type': 'application/json', }
                })
                    .then(response =>
                        response.text())
                    .then(data => {
                        console.log(data)
                        //alert('utente cancellato')
                        tableRow.remove()
                    })
            })
        })



    })
var bottone = document.querySelector('#button')
bottone.addEventListener('click', function () {
    setTimeout(function () {
        window.location = "nuovoUtente.html";
    }, 1000)
})



