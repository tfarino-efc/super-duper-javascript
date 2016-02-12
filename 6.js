<!DOCTYPE html>
<html>

  <body>
    <script>
    'use strict';
    //a function determines:
    //1.whether a number is odd;
    //2.whether it is simple;
    //3.whether the number is divisible by 3.
    
   var a = 3;
   var x, y, z;

    function getMassive (a) {
//1    
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
