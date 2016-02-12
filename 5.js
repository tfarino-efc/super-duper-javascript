Создать простую функцию - валидатор пароля, на входе она получает строку и возвращает true, если все условия выполнены и false, если нет.
Должны выполняться следующие условия:
минимум одна буква в верхнем регистре
минимум одна в нижнем
минимум одно число
должно быть минимум 8 знаков

var pass = prompt('Введите пароль', '');

function checkPassword(pass) {   
var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;  
  if(pass.value.match(password)) {   
    alert('Correct')  
    return true;  
  } else {   
    alert('Wrong')  
    return false;  
  }  
}

alert(checkPassword(pass));
