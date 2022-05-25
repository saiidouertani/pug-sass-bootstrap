let animation_time = 3000;

let iconparam = document.querySelector(".param");
iconparam.onclick = function () {
  console.log("ok");
  document.querySelector(".parameter").classList.toggle("viewparam");
};
// color code

let listcolor = document.querySelector(".parameter .colors");
let color = document.querySelectorAll(".parameter .color .colors li");
// listcolor.addEventListener('click', function (e) {
//   console.log(e.target.parentElement)
//   e.target.parentElement.querySelectorAll('li').forEach((element) => {
//     element.classList.remove('coloractive')
//   })
//   e.target.classList.add('coloractive')
// })
for (i = 0; i < color.length; i++) {
  if (color[i].dataset.color == localStorage.getItem("activecolor")) {
    color[i].classList.add("coloractive");
    break;
  }
}
document.documentElement.style.setProperty(
  "--main-color",
  localStorage.getItem("activecolor")
);

color.forEach(function (el) {
  el.addEventListener("click", function (e) {
    color.forEach(function (el) {
      el.classList.remove("coloractive");
    });
    e.target.classList.add("coloractive");
    localStorage.setItem("activecolor", e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});

// color code

let imageback = [
  "../../../imgs/laptop-3.webp",
  "../../../imgs/table.jpg",
  "../../../imgs/01.jpg",
  "../../../imgs/istockphoto-1.jpg",
  "../../../imgs/laptop.webp",
  "../../../imgs/02.jpg",
];
let header = document.querySelector("header");

function imgrightscroll() {
  let s = 0;
  let startbackfround = window.setInterval(function () {
    // header.style.backgroundImage = `url(${
    //   imageback[Math.floor(Math.random() * imageback.length)]
    // })`
    header.style.backgroundImage = `url(${imageback[s]})`;
    s++;
    if (s == imageback.length) {
      clearInterval(startbackfround);
      imgleftscroll();
    }
  }, animation_time);
}
function imgleftscroll() {
  let l = imageback.length;
  let returnback = setInterval(function () {
    header.style.backgroundImage = `url(${imageback[l - 1]})`;
    l--;
    // console.log(l)
    if (l == 0) {
      clearInterval(returnback);
      imgrightscroll();
    }
  }, animation_time);
}
imgrightscroll();

let ulbtn = document.querySelector(".parameter .randbg ul");
window.onload = function () {
  ulbtn.querySelectorAll("li").forEach(function (el) {
    if (el.classList.contains("coloractive")) {
      el.style.cursor = "none";
    }
  });
};

ulbtn.addEventListener("click", function (e) {
  ulbtn
    .querySelectorAll("li")
    .forEach((el) => el.classList.remove("coloractive"));
  if (e.target.dataset.background == "no") {
    clearInterval(startbackfround);
  }
  if (e.target.dataset.background == "yes") {
    startbackfround = window.setInterval(function () {
      header.style.backgroundImage = `url(${
        imageback[Math.floor(Math.random() * imageback.length)]
      })`;
    }, animation_time);
  }
  e.target.classList.add("coloractive");
  ulbtn.querySelectorAll("li").forEach(function (el) {
    if (el.classList.contains("coloractive")) {
      el.style.cursor = "none";
    } else {
      el.style.cursor = "pointer";
    }
  });
});

let bulletparam = document.querySelector(".parameter .bullet ul ");
let bullets = document.querySelector(".bulets");
if (localStorage.getItem("bulletshow") == "yes") {
  bullets.style.display = "block";
} else {
  bullets.style.display = "none";
  bulletparam.querySelectorAll("li").forEach(function (el) {
    el.classList.remove("coloractive");
  });
  for (i = 0; i < 2; i++) {
    bulletparam.querySelectorAll("li")[1].classList.add("coloractive");
  }
}

bulletparam.addEventListener("click", function (e) {
  bulletparam.querySelectorAll("li").forEach(function (el) {
    el.classList.remove("coloractive");
  });

  e.target.classList.add("coloractive");
  bulletparam.querySelectorAll("li").forEach(function (el) {
    if (el.classList.contains("coloractive")) {
      e.target.style.cursor = "none";
      if (e.target.dataset.bullet == "no") {
        bullets.style.display = "none";
      } else {
        bullets.style.display = "block";
      }
    } else {
      el.style.cursor = "pointer";
    }
  });
  localStorage.setItem("bulletshow", e.target.dataset.bullet);
});
// start pageparam

let activepagestartin;
let activepagestartreturnin;
function activepagestart(j) {
  let pagescrollbullet = document.querySelectorAll("header .pagescroll span");
  activepagestartin = window.setInterval(function () {
    pagescrollbullet.forEach((el) => el.classList.remove("pagebackactive"));
    pagescrollbullet.forEach((el) => el.classList.remove("pageactive"));
    pagescrollbullet[j].classList.add("pageactive");
    console.log("start" + j);
    j++;

    if (j == pagescrollbullet.length - 1) {
      clearInterval(activepagestartin);
      activepagereturn();
    }
  }, animation_time);
}
activepagestart(1);
function activepagereturn() {
  let pagescrollbullet = document.querySelectorAll("header .pagescroll span");
  let j = pagescrollbullet.length - 1;
  activepagestartreturnin = window.setInterval(function () {
    pagescrollbullet.forEach((el) => el.classList.remove("pageactive"));
    pagescrollbullet.forEach((el) => el.classList.remove("pagebackactive"));
    pagescrollbullet[j].classList.add("pagebackactive");
    console.log("end" + j);
    j--;
    // console.log(j)
    if (j == 0) {
      clearInterval(activepagestartreturnin);
      activepagestart(0);
    }
  }, animation_time);
}
