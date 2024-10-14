function about(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    const aboutHeader = document.createElement('div');
    aboutHeader.textContent = 'about Page!';
    const aboutBody = document.createElement('div');
    aboutBody.textContent = 'The body of the about text goes here dude';
    contentDiv.appendChild(aboutHeader);
    contentDiv.appendChild(aboutBody);
}

export default about;