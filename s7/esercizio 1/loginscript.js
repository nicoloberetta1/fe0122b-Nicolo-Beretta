document.querySelector('#accedi').addEventListener('click', function(e){
    e.preventDefault();
    var username = document.querySelector('#username').value
    var password = document.querySelector('#password').value
    var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

    let checkUser = listaUtenti.find(o => o.username == username && o.password == password)

    if ( checkUser == undefined){
        alert('Dati inseriti non validi')

    }else{
            alert('Ti sei loggato!')
            setTimeout(function () {
                window.location = "iscritti.html";
            }, 1000)
    }

})