<html> 
<head> 
<script language = 'javascript'> 

var date = new Date(2016,1,12,0,0,0); 
var minutes = date.getMinutes(); 
var seconds = date.getSeconds();

  
function startTime() { 

if (seconds < 10) {seconds = "0" + seconds;}

if (seconds>59) {
  minutes++;
  seconds = "0" + 0;
}

 if (minutes>59) {
  minutes = 0;
  seconds = "0" + 0;
   
}

 if (minutes < 10) {
   
    console.log(/*hours + ":" + */"0"+minutes + ":" + seconds); 
   
 } else {
   console.log(/*hours + ":" + */minutes + ":" + seconds); 
 }
setTimeout(startTime, 1000); 
  seconds++;
} 
startTime();
</script> 
<body></body> 
</html>
