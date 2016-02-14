<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function reverseString() {
  
  var word = prompt('Напишите слово', '').split('');
  var reverseWord = word.reverse().join('');
  
  console.log(reverseWord);
}

reverseString();
</script> 
<body></body> 
</html>
