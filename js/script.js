document.getElementById('play').addEventListener("click",
function () {
  document.getElementById('sipariotop').classList.remove("hidden");
  document.getElementById('sipariosx').classList.remove("hidden");
  document.getElementById('sipariodx').classList.remove("hidden");
  document.getElementById('play').classList.add("hidden");
  document.getElementById('mirino').classList.add("mirino")
  setTimeout(function () {
    document.getElementById('sipariosx').classList.add("hidden");
    document.getElementById('sipariodx').classList.add("hidden");
    document.getElementById('sipariotop').classList.add("hidden");
  }, 4000);
  setTimeout(function () {
    for (var i = 0; i <=6; i++) {
      numero = random = Math.floor(Math.random() * 6 + 1);
      document.getElementById('bersaglio-'+numero).classList.remove("hidden");
      console.log(numero);
    }
  }, 4500);
}
);
// esplosione quando viene colpito il bersaglio
document.getElementById('bersaglio-1').addEventListener("click",
function (){
  document.getElementById('bersaglio-1').classList.add("colpo-bersaglio-1");
  setTimeout(function () {
document.getElementById('bersaglio-1').classList.add("hidden");
  }, 500);
}
);
// bersaglio 2
document.getElementById('bersaglio-2').addEventListener("click",
function (){
  document.getElementById('bersaglio-2').classList.add("colpo-bersaglio-2");
  setTimeout(function () {
document.getElementById('bersaglio-2').classList.add("hidden");
  }, 500);
}
);
// bersaglio 3
document.getElementById('bersaglio-3').addEventListener("click",
function (){
  document.getElementById('bersaglio-3').classList.add("colpo-bersaglio-3");
  setTimeout(function () {
document.getElementById('bersaglio-3').classList.add("hidden");
  }, 500);
}
);
// bersaglio4
document.getElementById('bersaglio-4').addEventListener("click",
function (){
  document.getElementById('bersaglio-4').classList.add("colpo-bersaglio-4");
  setTimeout(function () {
document.getElementById('bersaglio-4').classList.add("hidden");
  }, 500);
}
);
// bersaglio5
document.getElementById('bersaglio-5').addEventListener("click",
function (){
  document.getElementById('bersaglio-5').classList.add("colpo-bersaglio-5");
  setTimeout(function () {
document.getElementById('bersaglio-5').classList.add("hidden");
  }, 500);
}
);
// bersaglio 6
document.getElementById('bersaglio-6').addEventListener("click",
function (){
  document.getElementById('bersaglio-6').classList.add("colpo-bersaglio-6");
  setTimeout(function () {
document.getElementById('bersaglio-6').classList.add("hidden");
  }, 500);
}
);
