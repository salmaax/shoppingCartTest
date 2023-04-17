// shopping cart
var products_container = document.querySelector(".cart-tickets");
var shopping_cart = document.querySelector(".shopping-cart");
var total_price = document.querySelector(".total-price");
var cartHandler = document.querySelector("#cart-btn");
var cart = document.querySelector(".cart-list");
var cartClose = document.querySelector(".close-cart");
var total_price = document.querySelector(".total-price");
var total = 0;
cartHandler.addEventListener("click", () => {
  cart.style.display = "block";
  cartClose.style.display = "block";
});
cartClose.addEventListener("click", () => {
  cart.style.display = "none";
  cartClose.style.display = "none";
});

var products = [
  {
    id: 1,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram4_b5f223bd-86d8-42eb-95f9-e905994a9674_1000x1000.jpg?v=1677164397",
    date: "FRIDAY 14TH APRIL",
    timing: "17:00 - 23:00",
    count: 1,
    price: 10,
  },
  {
    id: 2,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram_da2e5b96-9d13-4f60-ab4d-e3ac21fada82_1000x1000.jpg?v=1677164667",
    date: "SATURDAY 15TH APRIL",
    timing: "12:00 - 23:00",
    count: 1,
    price: 10,
  },
  {
    id: 3,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram6_44aaf1bb-0f95-4159-bc76-53bac672c1b6_1000x1000.jpg?v=1677164753",
    date: "SUNDAY 16TH APRIL",
    timing: "12:00 - 23:00",
    count: 1,
    price: 10,
  },
  {
    id: 4,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram4_b5f223bd-86d8-42eb-95f9-e905994a9674_1000x1000.jpg?v=1677164397",
    date: "FRIDAY 21TH APRIL",
    timing: "17:00 - 23:00",
    count: 1,
    price: 10,
  },
  {
    id: 5,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram_da2e5b96-9d13-4f60-ab4d-e3ac21fada82_1000x1000.jpg?v=1677164667",
    date: "SATURDAY 22TH APRIL",
    timing: "12:00 - 23:00",
    count: 1,
    price: 10,
  },
  {
    id: 6,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram6_44aaf1bb-0f95-4159-bc76-53bac672c1b6_1000x1000.jpg?v=1677164753",
    date: "SUNDAY 23TH APRIL",
    timing: "12:00 - 23:00",
    count: 1,
    price: 10,
  },
  {
    id: 7,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram4_b5f223bd-86d8-42eb-95f9-e905994a9674_1000x1000.jpg?v=1677164397",
    date: "FRIDAY 28TH APRIL",
    timing: "17:00 - 23:00",
    count: 1,
    price: 10,
  },
  {
    id: 8,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram_da2e5b96-9d13-4f60-ab4d-e3ac21fada82_1000x1000.jpg?v=1677164667",
    date: "SATURDAY 29TH APRIL",
    timing: "12:00 - 23:00",
    count: 1,
    price: 10,
  },
  {
    id: 9,
    img: "//cdn.shopify.com/s/files/1/0696/3042/7456/products/instagram6_44aaf1bb-0f95-4159-bc76-53bac672c1b6_1000x1000.jpg?v=1677164753",
    date: "SUNDAY 30TH APRIL",
    timing: "12:00 - 23:00",
    count: 1,
    price: 10,
  },
];
var cartProducts = [];

function displayProducts() {
  products_container.innerHTML = "";
  products.map(
    (product) =>
      (products_container.innerHTML += `
    <div class="cardt">
        <div class="imgticket">
          <img
          class="ticket_image"
          src=${product.img}
          where="src"
          alt=""
          loading="lazy"
          />
        </div>
      <div class="notes">
        <p>${product.date}</p>
        <p>General Admission</p>
        <p>${product.timing}</p>
        <p>${product.price}$</p>
      </div>
      <div class="ticketButtons">
        <button onclick="increment(${product.id})">+</button>
        <p>${product.count}</p>
        <button onclick="decrement(${product.id})">-</button>
        <button onclick="addProduct(${product.id})">Add Product</button>
      </div>
    </div>
      `)
  );
}

function decrement(id) {
  products.map((product) => {
    if (product.id == id && product.count > 1) product.count--;
  });
  displayProducts();
}

function increment(id) {
  products.map((product) => {
    if (product.id == id) product.count++;
  });
  displayProducts();
}

// You have to replace the product card with the suitable card for your cart[DONE]
function displayCart() {
  cart.innerHTML = "";
  if (!cartProducts.length) {
    cart.innerHTML = "<p>Cart Is Empty</>";
  } else {
    cartProducts.map(
      (product) =>
        (cart.innerHTML += `
      <div class="cardinCart">
      <div class="cartdetails">
        <p>${product.date}</p>
        <p>General Admission</p>
        <p>${product.timing}</p>
        <p>${product.price}$ x${product.count}</p>
      </div>
      
      <button onclick="remove(${product.id})"class="removeButton">remove</button>
    </div>
      `)
    );
    total = 0;
    cartProducts.map((product) => (total += product.count * product.price));
    cart.innerHTML += "TOTAL: " + total + "$";
  }
}

displayProducts();
displayCart();

function addProduct(id) {
  let product_to_add = products.filter((product) => {
    return product.id == id;
  });
  let itemExists = cartProducts.filter((product) => {
    return product.id == id;
  });
  if (!itemExists.length) {
    cartProducts.push({ ...product_to_add[0] });
  } else {
    let index = cartProducts.findIndex((product) => product.id == id);
    cartProducts[index].count += product_to_add[0].count;
  }

  products[id - 1].count = 1;

  displayProducts();
  displayCart();
}

function remove(id) {
  let products_remaining = cartProducts.filter((product) => {
    return product.id !== id;
  });
  // let index = cartProducts.findIndex((product) => product.id == id);
  // cartProducts[index].count = 0;
  cartProducts = products_remaining;
  displayCart();
}
