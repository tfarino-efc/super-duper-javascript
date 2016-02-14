<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function findUpperIndex(phrase) {
  var phrase;
  
  //Создание новой строки в нижнем регистре из введенной 
  var lowerCasePhrase = phrase.toLowerCase();
  var upperIndex = [];
  
  //Поиндексное сравнение двух строк
  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i]!== lowerCasePhrase[i]) {
      upperIndex.push(i);
    }
  }  
  
  console.log(upperIndex);
}

findUpperIndex('JavaScript');

</script> 
<body></body> 
</html>
