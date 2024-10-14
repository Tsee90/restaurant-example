function menu(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    const menuHeader = document.createElement('div');
    menuHeader.textContent = 'Menu Page!';
    const menuBody = document.createElement('div');
    menuBody.textContent = 'The body of the menu text goes here dude';
    contentDiv.appendChild(menuHeader);
    contentDiv.appendChild(menuBody);
}

export default menu;