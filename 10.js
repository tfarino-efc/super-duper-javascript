<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function pick(obj, keys) {

var NewObj = {};
var UserKeys = [];

//записываем все ключи имеющегося объекта
UserKeys = Object.keys(obj);

 for (var i = 0; i < UserKeys.length; i++) {
   for (var j = 0; j < keys.length; j++) {

//сравнение ключей массива и ключей объекта
     if (UserKeys[i]==keys[j]) {
       NewObj[(UserKeys[i])] = obj[(keys[j])];
     }
   }
 }

 console.log(NewObj);
}

var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}

pick (user, ['exname','name','family','email','friends']);


</script> 
<body></body> 
</html>
