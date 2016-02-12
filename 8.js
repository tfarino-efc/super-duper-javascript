<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>

  <body>
    <script>
    'use strict';
var beer=8;
var str='';
var str1=' bottles of beer on the wall, ';
var str2=' bottles of beer.'+'\n'+' Take one down and pass it around,';
var str3='No more bottles of beer on the wall, no more bottles of beer.'+'\n'+'Go to the store and buy some more, '+beer+' bottles of beer on the wall.'
  
for (var i=beer; i>=1; i--) {  
    str=str+ i + str1 + i + str2;
    str=str+'\n'  // отображение каждой строки с новой строки
}
str=str+str3;
alert (str);
</script>
  </body>

</html>
