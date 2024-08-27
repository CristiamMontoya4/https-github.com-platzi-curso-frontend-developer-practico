const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const orderMenu = document.querySelector('.order-detail ');

const cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards-container');

const mainContainer = document.querySelector('.main-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconBurger.addEventListener('click', toggleMobileMenu);
iconCart.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    const isOpenOrderMenu = orderMenu.classList.contains('inactive');

    if (!isOpenOrderMenu){
        orderMenu.classList.add('inactive');
    }

}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    const isOpenOrderMenu = orderMenu.classList.contains('inactive');

    if (!isOpenOrderMenu){
        orderMenu.classList.add('inactive');
    }

}

function toggleCartAside() {
    orderMenu.classList.toggle('inactive');

    const isOpenMobileMenu = mobileMenu.classList.contains('inactive');
    const isOpenDesktopMenu = desktopMenu.classList.contains('inactive');

    if (!isOpenMobileMenu){
        mobileMenu.classList.add('inactive');
    }
    if (!isOpenDesktopMenu){
        desktopMenu.classList.add('inactive');
    }

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 370,
    image: 'https://tse2.mm.bing.net/th?id=OIP.WiCeuPKkhWCwzFmJUc1m0gHaFj&pid=Api&P=0&h=180',
});
productList.push({
    name: 'Bed',
    price: 200,
    image: 'https://tse3.mm.bing.net/th?id=OIP.udzU6V4Efv52rqyXg0zVRAHaHa&pid=Api&P=0&h=180',
});
productList.push({
    name: 'Futbol Ball',
    price: 25,
    image: 'https://tse2.mm.bing.net/th?id=OIP.ogMkWFRx2TWFLaScRAREYgHaHa&pid=Api&P=0&h=180',
});
productList.push({
    name: 'T-shirt',
    price: 20,
    image: 'https://tse1.mm.bing.net/th?id=OIP.GEvyb4hWXJMwcQvjh3GazQHaHa&pid=Api&P=0&h=180',
});
productList.push({
    name: 'Fridge',
    price: 500,
    image: 'https://cdn.knorrweb.com/samsung/800x800/rf22kredbsr.jpg',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const  detailInfo = document.createElement('div');
    
        const  productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
    
        const  productName = document.createElement('p');
        productName.innerText = product.name;
        
        detailInfo.append(productPrice, productName); 
        
        const productFigure = document.createElement('figure');
    
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(imgFigure);
    
        productInfo.append(detailInfo, productFigure); //permite agregar varios nodos al DOM
                
        productCard.append(imgProduct, productInfo);
    
        cardsContainer.appendChild(productCard); //Permite agregar un nodo al DOM
        mainContainer.appendChild(cardsContainer);
    
    }
}

renderProducts(productList);



// for (product of productList) {  //puede tarer las propiedades
//     console.log(product.name);
// }

// for (product in productList) {  //puede traer el indice
//     console.log(product.name);
// }



// otra forma de recorrer el Array
// for(product of products){
//     const htmlCards = `<div class="product-card">
//         <img src=${product.image} alt="">
//         <div class="product-info">
//           <div>
//             <p>$${product.price}</p>
//             <p>${product.name}</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>`

//     const cardsContainer = document.querySelector('.cards-container');
//     cardsContainer.innerHTML += htmlCards;
// }