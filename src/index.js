import './style.css';
import home from './home-script.js';
import menu from './menu-script.js';
import about from './about-script.js';

const init = (function(){
    home();
    const homeBtn = document.querySelector('#home-btn');
    homeBtn.addEventListener('click', home);
    const menuBtn = document.querySelector('#menu-btn');
    menuBtn.addEventListener('click', menu);
    const aboutBtn = document.querySelector('#about-btn');
    aboutBtn.addEventListener('click', about);
})();

