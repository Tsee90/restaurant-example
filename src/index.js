import './style.css';
import home from './home-script.js';
import menu from './menu-script.js';
import about from './about-script.js';

const init = (function(){
    function buttonLine(event){
        navList.forEach(btn => {
            btn.classList.remove('selected');
        });
        event.target.classList.add('selected');
    }
    const homeBtn = document.querySelector('#home-btn');
    homeBtn.addEventListener('click', home);
    const menuBtn = document.querySelector('#menu-btn');
    menuBtn.addEventListener('click', menu);
    const aboutBtn = document.querySelector('#about-btn');
    aboutBtn.addEventListener('click', about);
    const navList = document.querySelectorAll('button');
    navList.forEach(btn => {
        btn.addEventListener('click', buttonLine);
    });
    homeBtn.click();
})();

