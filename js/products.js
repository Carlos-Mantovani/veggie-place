const productList = document.querySelector('.filter-products')
const products = [
{
	name: "Hamburger vegetariano",
	price: "25,00",
	image: "../img/products/hamburger.png"
},
{
	name: "Bebiba de caju 1L",
	price: "23,90",
	image: "https://github.com/Carlos-Mantovani/veggie-place/blob/master/img/products/bebida-de-caju.jpg"
},
{
	name: "Máscara de Cílios Maxi 7ml",
	price: "59,43",
	image: "../img/products/rimel.jpg"
},
{
	name: "Sorvete de chocolate com avelã vegano Kibon 800ml",
	price: "23,90",
	image: "../img/products/sorvete.webp"
}
];

for (let i = 0; i < products.length; i++) {
	const product = document.createElement('li');
	const productImage = document.createElement('div');
	const productDescription = document.createElement('div');
	const productName = document.createElement('p');
	const productPrice = document.createElement('h3');

	const name = products[i].name;
	const price = products[i].price;
	const image = products[i].image;

	productImage.classList.add('product-image');
	productDescription.classList.add('product-description');
	productName.classList.add('procuct-name');
	productPrice.classList.add('product-price');

	productImage.style.backgroundImage = `url(${image})`;
	productName.textContent = name;
	productPrice.textContent = price;

	productDescription.appendChild(productName);
	productDescription.appendChild(productPrice);
	product.appendChild(productImage);
	product.appendChild(productDescription);
	productList.appendChild(product);
}