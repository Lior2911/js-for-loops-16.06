// let h3Class = document.getElementsByClassName("h3Class")
// for(const someElement of h3Class ){
//   console.log(someElement)
// }

let pargrraphColor = document.getElementsByTagName("p");

function changeColor(){
  for (const correntP of pargrraphColor){
    correntP.innerText = "hello";
    correntP.style.color = "blue";
  }
}