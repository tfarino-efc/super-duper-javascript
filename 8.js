<html> 
<head> 
<script language = 'javascript'> 
'use strict'

//Помню, что использование continue/break не желательно,
//но в моем случае нужно сразу выйти из двух циклов

function uniqueElements(phrase) {
  var phrase;
  var unique = [];

  //Создание метки для continue
  outer:
    for (var i = 0; i < phrase.length; i++) {
      var element = phrase[i];
      
      //Поиск одинаковых элементов
      for (var j = 0; j < unique.length; j++) {
        if (unique[j] == element) {
          continue outer;
        }
      }
      
      unique.push(element);
    }

  return unique;
}

console.log(uniqueElements('123454dffssssss'));

</script> 
<body></body> 
</html>
