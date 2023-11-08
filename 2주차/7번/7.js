const timer = document.querySelector("span");

let num = Number(timer.textContent);

const interval = setInterval(function(){
  if(num < 10){
    num = num + 1
    timer.innerHTML = num;
  }else{
    clearInterval(interval)
  }
}, 1000);