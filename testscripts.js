function greet() {
    console.log('holla');
}
 greet();

 console.log('funka!');

let func = () => {
return console.log('test');
 } 
 func();

 function printNumbs(...numbers) {
    for (let num of numbers) {
        console.log(num);
    }
 }
 printNumbs(1, 2, 3);


 





    function calculator(arr) {
        let currentResult = 0;


        for (let i = 0; i < arr.length; i++) {
            let { tal1, tal2, operator } = arr[i];
        

       if(tal1 === 'result') {
        tal1 = currentResult;
       }
       if(tal2 === 'result') {
        tal2 = currentResult;
       }

       switch (operator) {
        case '+':
            currentResult = tal1 + tal2;
            break;
        case '*':
            currentResult = tal1 * tal2;
            break;
        case '/':                     
            if (tal2 === 0) {
                console.log('Cannot divide with zero');
            } else {
                currentResult = tal1 / tal2;
            }   
       }
     console.log('resultat=' + currentResult);
       }
       return currentResult;
    }

        console.log(calculator(arr));

        const arr =[ 
            { tal1: 10, tal2: 5, operator: '+'},
            { tal1: 'result', tal2: 3, operator: '*'},
            { tal1: 'result', tal2: 0, operator: '/'}
         ];


         function persistence(num) {
         +num.toString()[0];

          }
          console.log(persistence(299));

          return calc ((a, b) => a * b);

           const calculation = (c, d) => c * d;
       
          console.log(calculation(22, 56));
/*
          Specifikationer:
Skapa en funktion performMathOperations som tar ett tal som argument och använder
 Math.round, Math.ceil, och Math.floor för att avrunda talet på olika sätt. 
 Resultaten ska loggas till konsolen.
*/

function performMathOperations (a, b, c) {
    const round = Math.round(a);
    const ceil = Math.ceil(b);
    const floor = Math.floor(c);
    console.log('Math.round = ' + round);
    console.log(ceil, floor);
}
performMathOperations(43.56, 33.22, 125.33);
 

/*
Skriv en annan funktion generateRandomNumber som returnerar ett slumpmässigt tal mellan 1 och 100, 
avrundat till närmaste heltal.
*/
function generateRandomNumber (){
    const random = Math.random()*100;
    const round = Math.round(random);
    return round;
}
console.log(generateRandomNumber());

/* Specifikationer:
Skapa en HTML-sida med flera paragrafer och en knapp.
När knappen klickas, använd jQuery för att ändra texten i alla paragrafer till "Texten har ändrats!".
Ändra bakgrundsfärgen på paragraferna till ljusblå när de hovras över.
*/


