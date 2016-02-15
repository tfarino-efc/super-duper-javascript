<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function notRepeatedElements(repeated) {
  var repeat;
  var notRepeate = [];
  repeated.split('').sort();
  
  //сравнение и вывод неповторяющихся чисел
  for (var i = 0; i < repeated.length; i++) {
    if (repeated[i] != repeated[i+1]) {
      notRepeate.push(repeated[i]);
    }
  }
  
  console.log(notRepeate);
}

notRepeatedElements('123345666')
</script> 
<body></body> 
</html>
