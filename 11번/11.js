const date = new Date();
const hours = date.getHours();


if( hours < 10){
  console.log("good morning")
}else if(hours < 18){
  console.log("good afternoon")
}else{
  console.log("good evening")
}