function menu(){
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    const menuHeader = document.createElement('div');
    menuHeader.id = 'menu-header';
    menuHeader.innerHTML = '<em>Generic Menu<em>';
    const menuBody = document.createElement('div');
    menuBody.id = 'menu-body';
    for(let i = 0; i < 5; i++){
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        const item = document.createElement('div');
        item.classList.add('item');
        const itemName = document.createElement('div');
        itemName.id = 'itemName-' + i;
        itemName.classList.add('item-name');
        const itemDescription = document.createElement('div');
        itemDescription.id = 'description-' + i;
        itemDescription.classList.add('item-description');
        const itemPrice = document.createElement('div');
        itemPrice.id = 'price-' + i;
        itemPrice.classList.add('item-price');
        item.appendChild(itemName);
        item.appendChild(itemDescription);
        menuItem.appendChild(item);
        menuItem.appendChild(itemPrice);
        menuBody.appendChild(menuItem);
    }
    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuBody);
    contentDiv.appendChild(menuContainer);
    document.getElementById('itemName-0').textContent = 'Hamburger';
    document.getElementById('description-0').innerHTML = 'Our generic hamburger is made with a frozen beef puck, day old lettuce, and finger mayonnaise. Add fries: $10.00';
    document.getElementById('price-0').innerHTML = '$19.99';

    document.getElementById('itemName-1').textContent = 'Upgraded Hamburger';
    document.getElementById('description-1').innerHTML = 'Same as the generic hamburger but with the thinnest possible bacon included. Add fries: $10.00';
    document.getElementById('price-1').innerHTML = '$24.99';

    document.getElementById('itemName-2').textContent = 'Chicken Wings';
    document.getElementById('description-2').innerHTML = 'Plump wing lopped directly off a roided up chicken that couldn\'t walk. Fried in recycled oil, served with cottage cheese. Add fries: $10.00';
    document.getElementById('price-2').innerHTML = '$19.99';

    document.getElementById('itemName-3').textContent = 'Sandwich';
    document.getElementById('description-3').innerHTML = 'Oscar-Myer cold cuts on Great Value bread with finger mayonnaise. Add fries: $10.00';
    document.getElementById('price-3').innerHTML = '$19.99';

    document.getElementById('itemName-4').textContent = 'Fries';
    document.getElementById('description-4').innerHTML = 'Made with lots of love, and by love I mean salt. Add more fries: $10.00';
    document.getElementById('price-4').innerHTML = '$14.99';

  

}

export default menu;