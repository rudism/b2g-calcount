document.addEventListener('DOMContentLoaded', initialize, false);

function initialize(){
  if(!localStorage.calCount){
    localStorage.calCount = 0;
  }

  refresh();

  attachClick('plus-10', function(){ adjustCalories(10); });
  attachClick('plus-100', function(){ adjustCalories(100); });
  attachClick('plus-500', function(){ adjustCalories(500); });
  attachClick('minus-500', function(){ adjustCalories(-500); });
  attachClick('minus-100', function(){ adjustCalories(-100); });
  attachClick('minus-10', function(){ adjustCalories(-10); });
  attachClick('newday', function(){ localStorage.calCount = 0; refresh(); });
}

function attachClick(id, func){
  document.getElementById(id).addEventListener('click', func, false);
}

function adjustCalories(amt){
  localStorage.calCount = parseInt(localStorage.calCount) + parseInt(amt);
  if(localStorage.calCount < 0){
    localStorage.calCount = 0;
  }
  refresh();
}

function refresh(){
  document.getElementById('count').innerHTML = localStorage.calCount;
}
