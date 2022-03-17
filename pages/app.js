// esconder barra de navegação após o scroll
window.addEventListener("scroll", ()=>{
    const menuNav = document.querySelector(".menu");
    menuNav.classList.toggle("scroll-active",
    window.scrollY> 80)
});

// image silder
