<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function registration(regArray) {
  var regArray;
  var problemLogins=[];
  
  //поиск "_" в конце логина
  for (var i=0; i < regArray.length; i++) {
    if ((regArray[i][0][regArray[i][0].length-1])=='_') {
      problemLogins.push(regArray[i]);
    }
  }
  
console.log (problemLogins)
  
}
registration([['mike','mike@mail.ru'],['_bob','bob@mail.ru'],['nichjkk_','nck@mail.ru']]);


</script> 
<body></body> 
</html>
