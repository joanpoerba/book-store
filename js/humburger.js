const body = document.body
const humburger = document.querySelector(".humburger")

humburger.addEventListener('click', () => {
  body.classList.toggle("humburgerActive")
})