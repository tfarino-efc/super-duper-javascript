<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function largestElements(quantity,elements) {
  var elements;
  var bigEls=[];
  var quantity; //numbers quantity
  
  //Сортирует в обратном порядке
  elements.sort((function(a, b) { 
    return b - a; 
  }));
  
  //Возвращает наибольшие элементы в упорядоченном виде
  bigEls = elements.splice(0,quantity).reverse();
  
  console.log(bigEls);
}

largestElements(3,[1,14,5,6,3,7])
</script> 
<body></body> 
</html>
