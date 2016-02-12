<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>

  <body>
    <script>
    'use strict';
var a=8;
var str=''; // берем для начала пустую строку

if (a<2) { // для а = 1 или 0
  
  alert ('\"\"') // это чтобы кавычки отображались
}
else {
  
   if (a % 2) { // проверяем на четность, если нечетное, то нужно уменьшить на 1 до четного
    a = a-1; // ближайшее меньшее четное число;
  }
  
for (var i=1; i<=a/2; i++) {  // это самое сложное.. я сам толком не понял как это сделал)) 
    for (var j=0; j<i; j++) { 
    str=str + (i*2) + (i*2);
    
  }
  str=str+'\n'  // отображение каждой строки с новой строки
}
alert (str);

}
</script>
  </body>

</html>
