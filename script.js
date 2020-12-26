const scrollTop = document.querySelector('.scroll')

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
