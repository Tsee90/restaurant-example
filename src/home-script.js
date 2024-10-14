function home(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    const homeHeader = document.createElement('div');
    homeHeader.textContent = 'Home Page!';
    const homeBody = document.createElement('div');
    homeBody.textContent = 'The body of the text goes here dude';
    contentDiv.appendChild(homeHeader);
    contentDiv.appendChild(homeBody);
}

export default home;