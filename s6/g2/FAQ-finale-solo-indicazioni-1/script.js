$(()=>{
    $("h2").click(function(){
        $(this).next().toggle();
    $(this).toggleClass("meno")
    });
        
})