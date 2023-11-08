const btn = document.querySelector("button");

window.addEventListener("scroll", function(){
  if(scrollY > 100){
    document.querySelector("button").style.display = "block";
    document.querySelector("button").classList.add("show");
    btn.classList.add("show")
  }else{
    document.querySelector("button").style.display = "none";
    document.querySelector("button").classList.remove("show");
    btn.classList.remove("show")
  }
})