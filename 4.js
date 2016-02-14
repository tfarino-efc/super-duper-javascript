<html> 
<head> 
<script language = 'javascript'> 
'use strict'
function findMissingNumber() {
  var numbers = [-1, -2, -3, -5, -6, -7];
  
  //Сортировка массива в порядке возрастания
  numbers.sort(function(a, b) {
    return a - b;
  });
  
  //Нахождение пропущенного числа
  for (var i=0; i<numbers.length; i++) {
    if ((numbers[i+1])-numbers[i]>1) {
      console.log(numbers[i+1]-1);
    }
  }

}

findMissingNumber();

</script> 
<body></body> 
</html>
