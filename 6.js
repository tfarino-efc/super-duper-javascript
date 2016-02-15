<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function filterNumbers(record) {
  var record;
  var notStrings = [];
  
  for (var i = 0; i < record.length; i++) {
    if (record[i] / 1) {
      notStrings.push(record[i]);
    }
  }
  
  console.log(notStrings);
}

filterNumbers([1,2,'a','b',3])
</script> 
<body></body> 
</html>
