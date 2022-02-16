//funzione freccia
/*function saluto (){
    return "ciao come stai?";
}*/
saluto = () => "ciao come stai?";
alert(saluto());

//funzione sottrazione

function sottrazione(){
    var eta1 = 65;
    var eta = document.getElementById('eta').value;
    alert(eta1 - eta);
}

//funzione dentro un altra funzione
function conteggio(){
    var pippo = 3;
    var pluto = 4;
    
    
    function somma(){
        var paperino = 5;
        
        return pippo + pluto + paperino
        
    }
    return somma();
}
console.log(conteggio())
 



//operatori

'marco' == 'marco'  // affermazione true
'marco' === 'marco' // affermazione true

'marco' == 'giovanni' // affermazione false
'marco' === 'giovanni' // affermazione false
'marco' != 'marco' // affermazione false
'marco' != 'giovanni' // affermazione true
'marco' !== 'marco' // affermazione false
'marco' !== 'giovanni' // affermazione true
'2' != 2 // affermazione false
'2' !== '2' // affermazione false