const restaurantList = document.querySelector('.restaurant-list');

const arr = [{
    name: 'Restaurante vegano',
    image: '../img/restaurants/1.jpg'
},
{
    name: 'Restaurante vegano',
    image: '../img/restaurants/2.png'
},
{
    name: 'Restaurante vegano',
    image: '../img/restaurants/3.jpg'
},
{
    name: 'Restaurante vegano',
    image: '../img/restaurants/1.jpg'
},
{
    name: 'Restaurante vegano',
    image: '../img/restaurants/2.png'
}
];

const colors = ['#548d19', '#f58227', '#ffd48f'];

for (let i = 0; i < arr.length; i++) {
    const restaurant = document.createElement('li');
    const img = document.createElement('div');
    const p = document.createElement('p');
    const rank = i + 1;
    let color = 0;
    if (i > colors.length) {
        color = colors[i - colors.length];
    } else {
        color = colors[i];
    }
    img.classList.add('img');
    restaurant.style.backgroundColor = color;
    img.style.backgroundImage = 'url(' + arr[i].image +')';
    restaurant.appendChild(img);
    p.textContent = `${rank}º ${arr[i].name}`;
    restaurant.appendChild(p);
    restaurantList.appendChild(restaurant);
}