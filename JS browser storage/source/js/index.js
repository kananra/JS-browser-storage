
const btns = document.querySelectorAll(".basket");
const cards = document.querySelector(".card-body");

btns.forEach(btn => {
  btn.addEventListener('click', addToCart);
});

function addToCart(event) {
  const product = event.target.parentNode.parentNode.children[0].textContent; 
  const about = event.target.parentNode.parentNode.children[1].textContent; 
  const price = event.target.parentNode.children[0].textContent;
  

  const cartItem = {
    product: product,
    about: about,
    price: price
  };
  

  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  

  const existingItemIndex = cartItems.findIndex(item => item.product === product && item.about === about && item.price === price);
  if (existingItemIndex > -1) {
    cartItems[existingItemIndex].quantity += 1;
  } else {

    cartItem.quantity = 1;
    cartItems.push(cartItem);
  }
  

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  

  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('li');
    cartItemElement.innerHTML = `${item.product}<br>${item.about}<br>${item.price} x ${item.quantity}`;
    cartList.appendChild(cartItemElement);
  });
}


window.addEventListener('load', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
      const cartItemElement = document.createElement('li');
      cartItemElement.innerHTML = `${item.product}<br>${item.about}<br>${item.price} x ${item.quantity}`;
      cartList.appendChild(cartItemElement);
    });
  });
  