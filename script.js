const scrollTop = document.querySelector('.scroll')
const year = document.querySelector('.copyright span')
const email = document.querySelector('#email')

const height = innerHeight

document.addEventListener('scroll', () => {

    if (scrollY >= height * 2)
        scrollTop.style.display = 'block'
    else
        scrollTop.style.display = 'none'
})

scrollTop.addEventListener('click', () => {

    scroll({
        top: 0,
        behavior: "smooth"
    })

})

year.textContent = new Date().getFullYear()


//placeholder name@mail.com
let qualifiedName = email.getAttribute('placeholder')

email.addEventListener('focus', () => email.setAttribute('placeholder', ''))
email.addEventListener('blur', () => email.setAttribute('placeholder', qualifiedName))


