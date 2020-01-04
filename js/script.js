document.getElementById('play').addEventListener("click",
function () {
  document.getElementById('sipariotop').classList.remove("hidden");
  document.getElementById('sipariosx').classList.remove("hidden");
  document.getElementById('sipariodx').classList.remove("hidden");
  document.getElementById('play').classList.add("hidden");
  setTimeout(function () {
    document.getElementById('sipariosx').classList.add("hidden");
    document.getElementById('sipariodx').classList.add("hidden");
    document.getElementById('sipariotop').classList.add("hidden");
  }, 4000);
}
);
