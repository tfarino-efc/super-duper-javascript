<html> 
<head> 
<script language = 'javascript'> 
'use strict'
var struct = [{
    delta: 5,
    value: 5
}, {
    delta: 0,
    value: 0
}, {
    delta: 5,
    value: 7
}, {
    delta: 0,
    value: 7
}];

function fixStruct(struct) {

//проверка на правильность структуры с конца
for (var i = struct.length-1; i > 1; i--) {
  //если  delta !== разнице между двумя value,
  if (struct[i].delta !== (struct[i].value-struct[i-1].value)) {
    //то value == разности между value и delta
    struct[i-1].value = (struct[i].value-struct[i].delta);
    // тогда и delta == разности между двумя value 
    struct[i-1].delta = (struct[i-1].value-struct[i-2].value);
  }
}
console.log(struct);
}

fixStruct(struct);


</script> 
<body></body> 
</html>
