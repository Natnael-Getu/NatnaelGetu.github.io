const navToggle = document.querySelector('.nav-toogle')
const navLink = document.querySelectorAll('.nav__link')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // window.location.reload(true)
        }

    })
})
// observer.observe(document.getElementById("skill"))
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLink.forEach(links => {
    links.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
});
