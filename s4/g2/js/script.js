function invio(a,b){
    var a = document.getElementById('username').value;
    var b = document.getElementById('password').value;
    if(a == "username" && b == "password")  {
        location.href = "index.html"
    }
    
    else {
        alert('username o password errati')
    }
}