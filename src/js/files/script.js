// Подключение функционала "Чертогов Фрилансера"
// import { log } from 'gulp-util';
// import { lightGalleryCoreSettings } from 'lightgallery/lg-settings.js';
import { isMobile, menuClose, menuOpen, _slideUp, _slideDown, closeAllSubMenus } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
// import { log } from 'gulp-util';

const header_service = document.querySelector('.header-services');

if (header_service) {
  header_service.addEventListener("click", function (e) {
    header_service.classList.toggle('header-services_open')
  });
}