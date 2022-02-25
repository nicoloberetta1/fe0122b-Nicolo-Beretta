document.querySelector('#add_btn').addEventListener('click', function () {
    let valore = document.querySelector('#task_txt').value;
    if (!valore)
        return
    let li = document.createElement('li')
    li.innerText = valore
    document.querySelector('#tasks_list_html').append(li)
    document.querySelector('#task_txt').value = ''
    li.addEventListener('click', function () {
        li.remove()
        elimina(valore)
    })
    salva(valore)
})

function salva(testo) {
    let elementiSalvati = localStorage.getItem('lista', testo)
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    db.push(testo)
    localStorage.setItem('lista', JSON.stringify(db))
}

function creaHTML() {
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    db.forEach(function (elemento) {
        let li = document.createElement('li')
        li.innerText = elemento
        document.querySelector('#tasks_list_html').append(li)
        li.addEventListener('click', function () {
            li.remove()
            elimina(elemento)
        })
    })
}
creaHTML()

function elimina(testo) {
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    let indice = db.indexOf(testo)
    db.splice(indice, 1)
    localStorage.setItem('lista', JSON.stringify(db))
}

