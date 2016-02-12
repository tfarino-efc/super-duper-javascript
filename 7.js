<!DOCTYPE html>
<html>
  <body>
    <script>
    'use strict';
    
    var a;
    var str = '';
    
    function getEvenNumbers(a) {

    if (a < 2) { // for а = 1 or 0
      return ('\"\"') 
    } else {
      
    if (a % 2) { 
      a = a-1; 
    }
  
    for (var i = 1; i <= a/2; i++) {
      
      for (var j = 0; j < i; j++) { 
        str = str + (i*2) + (i*2);
      }
      
    str = str+'\n' 
    }

      return (str);
    }
  }

alert (getEvenNumbers(7));
</script>
  </body>

</html>
