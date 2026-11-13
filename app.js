const przycisk = document.querySelector('.menu-przycisk-mob');
const menu = document.querySelector(".menu");

przycisk.addEventListener('click', function () {
    const otwarte = menu.classList.toggle('otwarte');

    przycisk.setAttribute('aria-expanded', otwarte);
});