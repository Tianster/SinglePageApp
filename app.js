window.addEventListener('popstate', function (event) {
  console.log(event)
  route()
})

document.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    if (event.target.href.startsWith(window.location.origin)) {
      event.preventDefault()
      console.log(event)
      window.history.pushState(null, '', event.target.attributes.href.value)
      route()
    }
  }
})

function route () {
  Array.from(document.querySelectorAll('section'))
  .forEach(section =>
    section.style.display = 'none'
  )
  switch (window.location.pathname) {
    case '/about':
      document.title = 'About us'
      document.querySelector('#about')
        .style.display = 'block'
      break
    case '/products':
      document.title = 'products'
      document.querySelector('#products')
        .style.display = 'block'
      break
    case '/':
      break
  }
}
route()

// Array.from(document.querySelectorAll('nav a'))
// .forEach(function (anchor) {
//   anchor.addEventListener('click', function (event) {
//     event.preventDefault()
//     window.history.pushState(null, '', anchor.attributes.href.value)
//     Array.from(document.querySelectorAll('section'))
//     .forEach(section => section.style.display = 'none')
//     switch (window.location.pathname) {
//       case '/about':
//         document.title = 'About us'
//         document.querySelector('#about')
//         .style.display = 'block'
//         break
//       case '/shop':
//         document.title = 'Shop'
//         document.querySelector('#products')
//       .style.display = 'block'
//         break
//       case '/':
//         document.title = 'Homepage'
//         document.querySelector('#landing')
//       .style.display = 'block'
//         break
//     }
//   })
// })
