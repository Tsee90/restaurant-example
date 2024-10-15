function home(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    const homeContainer = document.createElement('div');
    homeContainer.id = 'home-container';
    const homeHeader = document.createElement('div');
    homeHeader.id = 'home-header';
    homeHeader.innerHTML = 'Welcome to <em>Generic Restaurant<em>';
    const homeBody = document.createElement('div');
    homeBody.id = 'home-body';
    homeBody.innerHTML = 'Here at <em>Generic Restaurant<em>, we believe in maximizing our profits through the use of generic foods. That\'s why we source all of our ingredients from our local Walmart, making sure only to buy the most discounted Great Value products available. Whether it\'s mayonnaise that\'s discounted because some kid stuck their finger in it or expired cream cheese turned cottage cheese, rest assured that it\'s our chefs are putting it in your food.<br><br>We guarantee that each and every one of our customers will be throughly disappointed with their meal, but not so disappointed that they won\'t pay. Instead, they will wait until they are in the parking lot to talk about how bad the food was. Then, after rating our restaurant one star on Google Maps, they leave the parking lot, never to return again.';
    homeContainer.appendChild(homeHeader);
    homeContainer.appendChild(homeBody);
    contentDiv.appendChild(homeContainer);
}

export default home;