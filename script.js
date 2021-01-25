const SCROLL_TOP = document.querySelector('.scroll')
const YEAR = document.querySelector('.copyright span')
const EMAIL = document.querySelector('#email')
const REVERSE = document.querySelector('nav svg')
const HEIGHT = innerHeight

//condition to display scroll btn
document.addEventListener('scroll', () => {

    if (scrollY >= HEIGHT * 2)
        SCROLL_TOP.style.display = 'block'
    else
        SCROLL_TOP.style.display = 'none'
})

//scroll to top btn
SCROLL_TOP.addEventListener('click', () => {

    scroll({
        top: 0,
        behavior: "smooth"
    })
})

//add current year
YEAR.textContent = new Date().getFullYear()

//get the placeholder name@mail.com
let qualifiedName = EMAIL.getAttribute('placeholder')

EMAIL.addEventListener('focus', () => EMAIL.setAttribute('placeholder', ''))
EMAIL.addEventListener('blur', () => EMAIL.setAttribute('placeholder', qualifiedName))

//DARK / LIGHT mode
REVERSE.addEventListener('click', () => {
    document.body.classList.toggle('reverse')
})

//TODO : add local storage