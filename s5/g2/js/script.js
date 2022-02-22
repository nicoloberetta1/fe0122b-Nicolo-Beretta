var budget = 1000;
       /* function random(min, max) {
           
            return Math.floor(Math.random() * (max - min) + min);
        }
        console.log(random(50, 300));
        while (budget < 1){
          budget-= random();

        }
        console.log(budget);*/

        /*var c = 0;
        while (c <= 100) {
            document.write(c + ' ');
            c += 2;
        }*/


       
        /*while (budget >= 0){
            console.log(budget);
            budget = budget - function random(min, max) {   
                   return Math.floor(Math.random() * (max - min) + min);
               }
        }*/
        while (budget >= 0) {
            console.log(budget);
            budget -= random()
            if (budget < 550 && budget > 460) {
                console.log('sei quasi a metà budget');
            }

            if (budget > 10 && budget < 70) {
                console.log('sei quasi alla fine del budget')
            };

            if (budget <= 1) {
                console.log('sei al verde');
            }
        }

        function random() {
            return Math.floor(Math.random() * 100);
        }