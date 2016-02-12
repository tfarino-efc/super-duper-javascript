<!DOCTYPE html>
<html>

<body>
  <script>
  //function which determines whether there is a line of two consecutive identical characters;
  
    'use strict';
    var a = '3d21aaa';
    var arr;
    var arr = a.split('');
    var b = arr.length;
    var check;
    
    for (var i=0; i<(b-1); i++) {
    
      if (arr[i] == arr[i+1]) {
        check = true;
        break;
      } else {
        check = false;
      }
      
      if (check == true) {  
        alert('в строке есть два подряд идущих одинаковых символа'); 
      } else {
        alert('в строке нет двух подряд идущих одинаковых символа');
      }
      
      
  </script>
</body>

</html>
