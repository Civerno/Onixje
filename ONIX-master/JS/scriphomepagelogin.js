const wrapper = document.querySelector('.wrapper');
const linkregistro = document.querySelector('.link-registro');
const linkingreso = document.querySelector('.link-ingresar');
const btnPopup = document.querySelector('.icono-login');
const iconClose = document.querySelector('.cerrar-icono');
const loginButton = document.getElementById('login-button'); // Obtener el botón por su ID

linkregistro.addEventListener('click', () => {
    wrapper.classList.add('active');
});

linkingreso.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
