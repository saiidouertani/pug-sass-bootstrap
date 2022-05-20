let iconparam = document.querySelector(".param");
console.log(iconparam);

iconparam.onclick = function () {
  console.log("ok");
  document.querySelector(".parameter").style = "left:0px";
};
