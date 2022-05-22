let iconparam = document.querySelector('.param')

iconparam.onclick = function () {
  console.log('ok')
  document.querySelector('.parameter').classList.toggle('viewparam')
}
let listcolor = document.querySelector('.parameter .colors')
let color = document.querySelectorAll('.parameter .color .colors li')
// listcolor.addEventListener('click', function (e) {
//   console.log(e.target.parentElement)
//   e.target.parentElement.querySelectorAll('li').forEach((element) => {
//     element.classList.remove('coloractive')
//   })
//   e.target.classList.add('coloractive')
// })
for (i = 0; i < color.length; i++) {
  if (color[i].dataset.color == localStorage.getItem('activecolor')) {
    color[i].classList.add('coloractive')

    break
  }
}
document.documentElement.style.setProperty(
  '--main-color',
  localStorage.getItem('activecolor'),
)

color.forEach(function (el) {
  el.addEventListener('click', function (e) {
    color.forEach(function (el) {
      el.classList.remove('coloractive')
    })
    console.log(e.target)
    e.target.classList.add('coloractive')

    localStorage.setItem('activecolor', e.target.dataset.color)
    document.documentElement.style.setProperty(
      '--main-color',
      e.target.dataset.color,
    )
  })
})

let imageback = [
  '../../../imgs/laptop-3.webp',
  '../../../imgs/table.jpg',
  '../../../imgs/01.jpg',
  '../../../imgs/web-design.jpg',
  '../../../imgs/laptop.webp',
]
let header = document.querySelector('header')
let s = 0

function imgrightscroll() {
  let startbackfround = window.setInterval(function () {
    // header.style.backgroundImage = `url(${
    //   imageback[Math.floor(Math.random() * imageback.length)]
    // })`
    header.style.backgroundImage = `url(${imageback[s]})`
    s++
    if (s == imageback.length) {
      clearInterval(startbackfround)
      imgleftscroll()
    }
  }, 1000)
}
function imgleftscroll() {
  let l = imageback.length
  let returnback = setInterval(function () {
    header.style.backgroundImage = `url(${imageback[l - 1]})`
    l--
    console.log(l)
    if (l == 0) {
      clearInterval(returnback)
      imgrightscroll()
    }
  }, 1000)
}
imgrightscroll()

let ulbtn = document.querySelector('.parameter .randbg ul')
window.onload = function () {
  ulbtn.querySelectorAll('li').forEach(function (el) {
    if (el.classList.contains('coloractive')) {
      el.style.cursor = 'none'
    }
  })
}

ulbtn.addEventListener('click', function (e) {
  ulbtn
    .querySelectorAll('li')
    .forEach((el) => el.classList.remove('coloractive'))
  if (e.target.dataset.background == 'no') {
    clearInterval(startbackfround)
  }
  if (e.target.dataset.background == 'yes') {
    startbackfround = window.setInterval(function () {
      header.style.backgroundImage = `url(${
        imageback[Math.floor(Math.random() * imageback.length)]
      })`
    }, 1000)
  }
  e.target.classList.add('coloractive')
  ulbtn.querySelectorAll('li').forEach(function (el) {
    if (el.classList.contains('coloractive')) {
      el.style.cursor = 'none'
    } else {
      el.style.cursor = 'pointer'
    }
  })
})

let bulletparam = document.querySelector('.parameter .bullet ul ')
let bullets = document.querySelector('.bulets')
if (localStorage.getItem('bulletshow') == 'yes') {
  bullets.style.display = 'block'
} else {
  bullets.style.display = 'none'
  bulletparam.querySelectorAll('li').forEach(function (el) {
    el.classList.remove('coloractive')
  })
  for (i = 0; i < 2; i++) {
    bulletparam.querySelectorAll('li')[1].classList.add('coloractive')
  }
}

bulletparam.addEventListener('click', function (e) {
  bulletparam.querySelectorAll('li').forEach(function (el) {
    el.classList.remove('coloractive')
  })

  e.target.classList.add('coloractive')
  bulletparam.querySelectorAll('li').forEach(function (el) {
    if (el.classList.contains('coloractive')) {
      e.target.style.cursor = 'none'
      if (e.target.dataset.bullet == 'no') {
        bullets.style.display = 'none'
      } else {
        bullets.style.display = 'block'
      }
    } else {
      el.style.cursor = 'pointer'
    }
  })
  localStorage.setItem('bulletshow', e.target.dataset.bullet)
})

// let pagescrollbullet = document.querySelectorAll('header .pagescroll span')
// let j = 0
// let activepage = window.setInterval(function () {
//   pagescrollbullet.forEach((el) => el.classList.remove('pageactive'))
//   pagescrollbullet[j].classList.add('pageactive')
//   j++
//   if (j == pagescrollbullet.length) {
//     clearInterval(activepage)
//   }
// }, 1000)
