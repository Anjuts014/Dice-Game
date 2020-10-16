  var random = Math.random();
  random = random * 6;
  random = Math.floor(random)+1;
  document.querySelector(".img1").setAttribute("src", "images/dice"+random+".png")
  var random1 = Math.random();
  random1 = random1 * 6;
  random1 = Math.floor(random1)+1;
  document.querySelector(".img2").setAttribute("src", "images/dice"+random1+".png")

  if(random===random1){
    document.querySelector("h1").innerHTML="Draw!"
  }
  else if(random>random1){
    document.querySelector("h1").innerHTML="&#128681 Player1 wins!"
  }
  else{
    document.querySelector("h1").innerHTML="Player2 wins! &#128681"
  }
