const menu_itens = document.querySelectorAll(".seta a[href^='#']");
const btn__mobile = document.getElementById("btn__mobile");

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById("navBar"); 
    nav.classList.toggle("active");
}

btn__mobile.addEventListener('click', toggleMenu); 
btn__mobile.addEventListener('touchstart', toggleMenu); 


menu_itens.forEach(item => {
    item.addEventListener("click", scrollitens);
})

function scrollitens(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 0; 
    scrollToPosition(to);

}

function getScrollTopByHref(element){
    const id = element.getAttribute("href");
    return document.querySelectorAll(id).offsetTop;
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}