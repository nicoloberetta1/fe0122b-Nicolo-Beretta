var bottone = document.querySelector('#btnRandom');
bottone.addEventListener('click', function () {
    document.getElementById("risultato").innerHTML = String(Math.floor(Math.random() * (100 - 1) + 1));
});

