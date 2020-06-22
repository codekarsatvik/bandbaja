
for(var i =0;i<7;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}

function clicked()
{
  var audio = new Audio(this.innerHTML + ".mp3");
  audio.play();
}


document.addEventListener("keypress",function(event){keypress(event.key)});


function keypress(key)
{
  var audio = new Audio(key + ".mp3");
  audio.play();

}
