<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>

  <body>
    <script>
    'use strict';

    //Написать функцию, которая на входе получает число, а на выходе возвращает 
    //массив из 3-х boolean элиментов, где первый - это является ли число нечетным, 
    //второй - является ли оно простым, и, наконец, делится ли число на 3.
   var a, x, y, z;

    function getMassive (a) {
//1    
     a = prompt('Введите число', '');
      
      
      if (a % 2) {
        x = true;
      } else {
        x = false;
      }
      
 //2     
      if (a!==2) { 
   
      for (var i = 2; i < a; i++) {
    
        if (a % i == 0)  {
          y = false; // не простое
          break;
        } else {
          y = true //  простое число;
        }
        }
      }
      
      else {
        y = true; // не простое
      }
      
//3      
      if (a % 3 == 0) {
        z = true;
      } else {
        z = false;
      } 
      
      var arr = [x,y,z];
    
    
     return ('является ли '+a+' нечетным - '+arr[0]+', является ли '+a+' простым - '+arr[1] +', делится ли '+a+' на 3 без остатка - '+arr[2]);
}

    alert (getMassive (a) );
    

</script>
  </body>

</html>
