<!DOCTYPE html>
<html>

<body>
  <script>
  //a function that returns the next nearest square root of a number, or -1 if there isn't such;
  
    'use strict';
    var a;
    var b;
    function findNextSquare(a) {
      b = (Math.sqrt(a)+1);
      
      if (Math.ceil(b) - b > 0) {
        return -1;
      } else {
        return Math.pow(b, 2);
      }
    }
    
    alert( findNextSquare(16) );
  </script>
</body>

</html>
