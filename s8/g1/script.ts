let bottone: any= document.querySelector('#btnRandom');

bottone.addEventListener('click',function(){
    document.getElementById("risultato").innerHTML = String(Math.floor(Math.random() * (100-1)+1));
})




/*getRandomInt(0, 100): number{
	
	return Math.floor(Math.random() * (100 - 1) +1) ; 
}*/
