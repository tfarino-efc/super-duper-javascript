<!DOCTYPE html>
<html>

  <body>
    <script>
    //function - password validator
    
    'use strict';

    var pass;
    
    function checkPassword(pass) {   
    var pass = prompt('Введите пароль', '');
    var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;  
      if(pass.match(password)) {   
        return true;  
      } else {   
        return false;  
      }  
    }
    
    alert(checkPassword(pass));

</script>
  </body>

</html>
