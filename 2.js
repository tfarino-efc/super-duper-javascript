<!DOCTYPE html>
<html>

<body>
  <script>
  //a function determines if the number is self-descriptive;
  
    'use strict';
    var a = 3211000678;
    var arr = String(a).split('');
    var b = arr.length;
    var x = 0;
    var check;
    
    for (var i=0; i<b; i++) {
      for (var j=0; j<b; j++) {
        if (arr[j] == i) {
          x++;
        }
      }
      
      if (arr[i] == x) {
        x = 0;
        check = true;
      } else {
        alert('число '+a+' не подходит');
        check = false;
        break;
      }
      
    }
    if (check == true)
    {alert('число '+a+' подходит');}
  </script>
</body>

</html>
