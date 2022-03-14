fetch('https://sofin.wp-admin.it/public/api/v1/user')

    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
var bottone = document.querySelector('#btn')
bottone.addEventListener('click', function (e) {
    e.preventDefault()

    var nome = document.querySelector('#username').value
    var Cognome = document.querySelector('#cognome').value
    var email3 = document.querySelector('#email').value
    var ruolo = document.querySelector('#ruolo').value
    var password1 = document.querySelector('#password').value

    fetch('https://sofin.wp-admin.it/public/api/v1/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nome,
                lastname: Cognome,
                email: email3,
                password: password1,
                role_id: ruolo

            })
        }
    )
        .then(response => response.json())
        .then(data => {
            alert('Utente creato')
        })

})