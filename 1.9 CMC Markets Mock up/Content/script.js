function myFunction() {
    
  setInterval(function(){ 
    var day = document.getElementById('day1');
    var month = document.getElementById('month3');
    var volday = document.getElementById('volday');
    var volmonth = document.getElementById('volmonth');
    var sell = document.getElementById('sell');
    var buy = document.getElementById('buy');
    
    var x = Math.round(Math.random());
      
      if (x == 1) {
          buy.innerHTML = parseFloat(buy.innerHTML) + 1;
          buy.style.color = 'chartreuse';
      } else {
          buy.innerHTML = parseFloat(buy.innerHTML) - 1;
          buy.style.color = 'red';
      }
    
    var y = Math.round(Math.random());
      
      if (y == 1) {
          sell.innerHTML = parseFloat(buy.innerHTML) + 1;
      } else {
          sell.innerHTML = parseFloat(buy.innerHTML) - 1;
      }
    
      if (x > y) {
          buy.style.color = 'chartreuse';
          sell.style.color = 'red';
      } else if (y > x) {
          sell.style.color = 'chartreuse';
          buy.style.color = 'red';
      } else {
          sell.style.color = 'white';
          buy.style.color = 'white';
      }
    var difference = Math.abs(x-y);
    var buyperc = 100-(Math.abs(100/(parseFloat(x))*y));
    var change = 100-(100/(parseFloat(x))*y);
    var days;
    var months;
      
      if (buyperc >= 0.01) {
          days = parseFloat(day.innerHTML).toFixed(2) + change.toFixed(2);
          months = parseFloat(day.innerHTML).toFixed(2) + change.toFixed(2);
          
          day.innerHTML = days.toFixed(2);
          month.innerHTML = months.toFixed(2);
      } 
  }, 1000);
}