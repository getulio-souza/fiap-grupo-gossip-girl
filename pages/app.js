// esconder barra de navegação após o scroll
window.addEventListener("scroll", ()=>{
    const menuNav = document.querySelector(".menu");
    menuNav.classList.toggle("scroll-active",
    window.scrollY> 80)
});

// image silder

const buttons = document.querySelectorAll("[data-carrosel]");

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) slides.children.length -1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})











///https://www.varonis.com/blog/git-branching