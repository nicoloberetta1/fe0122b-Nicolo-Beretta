$(document).ready(function(){

    $("#iscr-news").click(function () {

     let controllo = true;
     let email1 = $("#email-1").val();
     let email2 = $("#email-2").val();

     function riconosce (campo){
         if($(campo).val() == ""){
             $(campo).next().text("Campo richiesto");
             controllo = false;
         } else {
             $(campo).next().text("");
         }
     }

     let arrayy = $("#nome, #email-1, #email-2");

     arrayy.each((indice,element) => {
         riconosce(element);

     });



     if (email1 !== email2){
         $("#email-2").next().text("Le email non corrispondono!");
         controllo = false;
     }

     if(controllo == true){
         alert ("form inviato");
     } else {
         alert ("controlla che tutti i campi siano corretti!!");
     }


    });

    $("#pulisci-form").click(function () {
     $("#nome, #email-1, email-2").val("");

    });

 })