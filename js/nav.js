const navMenu = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');
const navElements = document.querySelectorAll('#nav-list li');

console.log(navElements)

navMenu.addEventListener('click', async () => {
    await setTimeout(navList.style.display = 'flex', 1000);
    console.log(navList.style.display);
    navList.classList.toggle('active');
    navElements.forEach(element => {
        element.style.animation ? element.style.animation = '' : element.style.animation = 'navLinkFade 0.5s ease forwards 0.3s';
    });
});