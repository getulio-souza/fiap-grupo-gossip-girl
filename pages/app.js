window.addEventListener("scroll", ()=>{
    const menuNav = document.querySelector(".menu");
    menuNav.classList.toggle("scroll-active",
    window.scrollY> 80)
});