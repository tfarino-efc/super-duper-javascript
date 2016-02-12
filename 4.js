<!DOCTYPE html>
<html>

  <body>
    <script>
    //a function that calculates the sum of all the numbers between the two which were indicated, including themselves;
    'use strict';
    
      var a=1;
      var b=5;
      var sum=0;
      
      function summary () {
        for (var i=a; i<=b; i++) {
        sum = sum + i;
        }
        return sum;
      }
      alert ('сумма всех чисел между '+a+' и '+b +', включая их самих = '+summary());
    </script
  </body>

</html>
