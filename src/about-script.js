function about(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-container';
    const aboutHeader = document.createElement('div');
    aboutHeader.id = 'about-header';
    aboutHeader.textContent = 'About US';
    const aboutBody = document.createElement('div');
    aboutBody.id = 'about-body';
    aboutBody.innerHTML = 'We started this restaurant with one simple vision: <em>make as much money as possible, as fast as possible<em>.<br><br>To achieve this goal we have partnered with a bunch of rich people, all of whom have never seen, let alone set foot in, a <em>Generic Restaurant<em>, but nevertheless believe in the power of marketing and the stupidity of the average consumer.<br><br>With their cash injection, we were able to forcibly carve out a market for our restaurant that will last for maybe 10 years, but by then we will have turned quite a profit so who cares.';
    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutBody);
    contentDiv.appendChild(aboutContainer);
}

export default about;