let bottoneInvia = document.querySelector('.btn');

bottoneInvia.addEventListener('click', function (e) {
    e.preventDefault();
    var arrayy = document.querySelectorAll('.form-control')
    var pippo = document.getElementById('username').value
    var psw = document.querySelector('#psw').value;
    var psw1 = document.querySelector('#psw1').value;
    var email = document.querySelector('#email').value;
    var email1 = document.querySelector('#email1').value;
    var controllo = true
    arrayy.forEach(elemento => {
        var valore = elemento.value;


        if (valore == '') {
            elemento.style.border = '1px solid red'
            controllo = false
        } else {
            elemento.style.border = ''

        }
    });
    if (email != email1) {
        document.getElementById('spanEmail').innerHTML = 'ricontrolla email'
        controllo = false
    } else {
        document.getElementById('spanEmail').innerHTML = ''

    }
    if (psw1 != psw) {
        document.getElementById('spanPsw').innerHTML = 'ricontrolla password'
        controllo = false
    } else {
        document.getElementById('spanPsw').innerHTML = ''

    }
    if (controllo) {
        var nuovoUtente = new User(pippo, email, psw);
        let utentememorizzato = memorizzaDati(nuovoUtente)
        if (utentememorizzato) {
            document.querySelector('#registerForm').reset()
            setTimeout(function () {
                window.location = "login.html"
            }, 2000);
        }
    }

})
class User {
    constructor(username, email, password) {
        this.id = (() => {
            let newId = localStorage.getItem('id') == null ? 1 : Number(localStorage.getItem('id')) + 1
            localStorage.setItem('id', newId)
            return newId //serve per valorizzare l'id altrimenti non lo trova
        })()
        this.username = username
        this.email = email
        this.password = password
    }
}
function memorizzaDati(newUser) {

    let elementiSalvati = localStorage.getItem('utenti');
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    var target = dataBase.find(oldUser => oldUser.email == newUser.email || oldUser.username == newUser.username);
    if (target == undefined) {
        dataBase.push(newUser);
        localStorage.setItem('utenti', JSON.stringify(dataBase))
        return true
    } else {
        document.getElementById('check').innerHTML = 'email o username già registrati'
        return false
    }

}


