<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function extend(obj1, obj2) {

  var obj1Keys = [];
  var obj2Keys = [];
  
  obj1Keys = Object.keys(obj1);
  obj2Keys = Object.keys(obj2);
  
  //Добавление ключей из второго объекта в первый
  for (var k=0; k < obj2Keys.length; k++) {
    obj1Keys.push(obj2Keys[k])
  }
  
  for (var i = 0; i < obj1Keys.length; i++) {
    for (var j = 0; j < obj2Keys.length; j++) {
      
      //Присваивание значений повторяющихся ключей
      if (obj1Keys[i]==obj2Keys[j]) {
        obj1[(obj1Keys[i])] = obj2[(obj2Keys[j])];
      }
    }
  }

console.log(obj1);
}

extend({foo: 'bar', baz: 1}, {foo: true, zoop: 0});


</script> 
<body></body> 
</html>
