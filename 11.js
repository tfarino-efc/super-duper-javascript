<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function contains(where, what) {
  var check = [];
    
  for (var i = 0; i < what.length; i++) {
    for (var j = 0; j < where.length; j++) {
      if (what[i] == where[j]) {
          check.push(what[i]);
      }
    }
  }
  
  for (var k = 0; k < where.length; k++) {
    if((check[k]!==what[k])||(check.length!==what.length)) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(contains([4, 3, 1, 2, 5, 6], [1,2,3]));


</script> 
<body></body> 
</html>
