// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

// Return the value of what she should be paying.

function transaccion(){
    var tran = prompt("Dame cuantas transacciones hiciste?");
    var costo = prompt("Dame el costo total de las transacciones");

    var resultado = (tran * 3) + (costo * 1.01);

    alert(resultado);

}

// transaccion();


// Exercise #2

// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

function saludar(){
    var nombres = {
        nom1: prompt("Nombre 1: "), nom2: prompt("Nombre 2"), nom3: prompt("Nombre 3")
    }
    

    console.log("Welcome " +nombres.nom1+ ", " +nombres.nom2+ ", " +nombres.nom3);
}

// saludar();

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

function edad(){
    var anio = prompt("Dame tu fecha de nacimiento: ");
    var edad =  2022 - anio;

    alert(anio+" returns "+edad);
}

// edad();

// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

function welcome(){
    var nombres = {
        nom1: prompt("Nombre: "),
        nom2: prompt("Nombre2: "),
        nom3: prompt("Nombre3: ")
    }
    var edades = {
        edad1: prompt("Edad: "),
        edad2: prompt("Edad2: "),
        edad3: prompt("Edad3: ")
    }

    console.log("Welcome " +nombres.nom1+ ", " +edades.edad1+ ".  Welcome " +nombres.nom2+ ", " +edades.edad2+ ". Welcome " +nombres.nom3+ ", " +edades.edad3+ ". ");
}

// welcome();

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

// Part 2
// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.


(function (grad) {
    //comprobamos que el rango de edad sea correcto
     if (grad <= 11 && grad >= 0) {
         if (grad >= 5) {
             console.log("Passed: " + true);
         }
         else {
             console.log("Passed: " + false)
         }
 
         if (grad>=8 && grad <11) {
             console.log("Excelent")
         }
         
         if(grad == 11) {
             console.log("Perfect")
         }
     }
     else {
         console.log("Valor no aceptado.")
     }
      
 })((15));
 



