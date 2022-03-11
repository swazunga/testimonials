var btnRight = document.querySelector(".btnRight");
var btnLeft = document.querySelector(".btnLeft");

function changeTest() {
  var quote1 = document.querySelector(".quote1");
  var tanyaName = document.querySelector(".tanyaName");
  var tanyaPic = document.querySelector(".tanyaPic");
  var quote2 = document.querySelector(".quote2");
  var johnName = document.querySelector(".johnName");
  var johnPic = document.querySelector(".johnPic");
  quote1.classList.toggle("hidden");
  tanyaName.classList.toggle("hidden");
  tanyaPic.classList.toggle("hidden");
  quote2.classList.toggle("hidden");
  johnName.classList.toggle("hidden");
  johnPic.classList.toggle("hidden");
}

btnRight.addEventListener("click", changeTest);
btnLeft.addEventListener("click", changeTest);
