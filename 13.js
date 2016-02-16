<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function createObject(arrOfKeys, arrOfData) {
  
  var NewObj = {};
  
  for (var i = 0; i < arrOfKeys.length; i++) {
    NewObj[arrOfKeys[i]]=arrOfData[i];
  }
 
  console.log(NewObj);
}

createObject(['foo','extra'], ['bar']);

</script> 
<body></body> 
</html>
