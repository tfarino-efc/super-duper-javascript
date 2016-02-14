<html> 
<head> 
<script language = 'javascript'> 
'use strict'

function getCurrentDate() {
  
  //функция возвращает значение месяца в буквенном виде вместо числового
  Date.prototype.getMonthName = function() { 
      var month = ['Январь','Февраль','Март','Апрель','Май','Июнь',
      'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
      return month[this.getMonth()];
  }
  
  //функция возвращает значение дня недели в буквенном виде вместо числового
  Date.prototype.getDayName = function() {
      var day = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница',
      'Суббота'];
      return day[this.getDay()];
  }
  
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonthName();
  var day = today.getDayName();
  
  var current = 'Год: ' + year + '\n' + 'Месяц: ' + month + '\n' + 'День недели: ' + day;
  
  console.log(current);
  
}

getCurrentDate();

</script> 
<body></body> 
</html>
