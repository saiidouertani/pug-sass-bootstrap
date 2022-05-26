let animation_time = 1000;

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
  "../../../imgs/cat-08.jpg",
  "../../../imgs/laptop.webp",
  "../../../imgs/programming-brain.png",
];
let header = document.querySelector("header");
let startbackfround;
let returnback;
let compt;

function imgrightscroll(s) {
  startbackfround = window.setInterval(function () {
    // header.style.backgroundImage = `url(${
    //   imageback[Math.floor(Math.random() * imageback.length)]
    // })`
    header.style.backgroundImage = `url(${imageback[s]})`;
    compt = s;
    s++;
    if (s == imageback.length - 1) {
      clearInterval(startbackfround);
      imgleftscroll(imageback.length - 1);
    }
  }, animation_time);
}
function imgleftscroll(l) {
  returnback = setInterval(function () {
    header.style.backgroundImage = `url(${imageback[l]})`;
    compt = l;
    l--;
    // console.log(l)
    if (l == -1) {
      clearInterval(returnback);
      imgrightscroll(1);
    }
  }, animation_time);
}
imgrightscroll(1);

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
    clearInterval(activepagestartin);
    clearInterval(activepagestartreturnin);
    clearInterval(startbackfround);
    clearInterval(returnback);
    console.log(comptpage);
    console.log(pagescrollbullet[comptpage]);
  }
  if (e.target.dataset.background == "yes") {
    console.log(pagescrollbullet[comptpage]);
    if (pagescrollbullet[comptpage].classList.contains("pageactive")) {
      console.log("yes");
      imgrightscroll(comptpage);
      activepagestart(comptpage);
    }
    if (pagescrollbullet[comptpage].classList.contains("pagebackactive")) {
      imgleftscroll(comptpage);
      activepagereturn(comptpage);
    }
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
let pagescrollbullet = document.querySelectorAll("header .pagescroll span");
let comptpage;
function activepagestart(j) {
  activepagestartin = window.setInterval(function () {
    pagescrollbullet.forEach((el) => el.classList.remove("pagebackactive"));
    pagescrollbullet.forEach((el) => el.classList.remove("pageactive"));
    pagescrollbullet[j].classList.add("pageactive");
    comptpage = j;
    j++;

    if (j == pagescrollbullet.length - 1) {
      clearInterval(activepagestartin);
      activepagereturn(pagescrollbullet.length - 1);
    }
  }, animation_time);
}
activepagestart(1);
function activepagereturn(j) {
  let pagescrollbullet = document.querySelectorAll("header .pagescroll span");
  activepagestartreturnin = window.setInterval(function () {
    pagescrollbullet.forEach((el) => el.classList.remove("pageactive"));
    pagescrollbullet.forEach((el) => el.classList.remove("pagebackactive"));
    pagescrollbullet[j].classList.add("pagebackactive");
    comptpage = j;
    j--;
    // console.log(j)
    if (j == 0) {
      clearInterval(activepagestartreturnin);
      activepagestart(0);
    }
  }, animation_time);
}

// our skills
let ourskills = document.querySelector(".ourskills");
let spanper = ourskills.querySelectorAll(".per");

window.onscroll = function () {
  if (window.scrollY >= ourskills.offsetTop - 250) {
    for (i = 0; i < spanper.length; i++) {
      spanper[i].style.width = spanper[i].dataset.percentage;
    }
  }
};
