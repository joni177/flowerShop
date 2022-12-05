let shop = document.getElementById("shop");
let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shop");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];

let isAuth = JSON.parse(localStorage.getItem("user"))?.isAdmin || [];

if (!isAuth) {
    location.href = "index.html";
}

/**
 * ! Generates the shop with product cards composed of
 * ! images, title, price, buttons, description
 */

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, desc, img, price } = x;
            let search = basket.find((y) => y.id === id) || [];
            return `
        <div id=product-id-${id} class="card text-light text-center bg-white pb-2">
        <i onclick="removeItem(${id})"  class="bi bi-x-lg"></i>
          <div class="card-body text-dark">
              <div class="img-area mb-4">
                <img src=${img} class="img-fluid" alt="">
              </div>
              <h3 class="card-title">${name} </h3>
              <p class="lead">${price}$</p>
              <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
    </div>
    `;
        })
        .join(""));
};

generateShop();

// let generateCartItems = () => {
//     if (basket.length !== 0) {
//         return (ShoppingCart.innerHTML = basket
//             .map((x) => {
//                 let { id, item } = x;
//                 let search = shopItemsData.find((x) => x.id === id) || [];
//                 let { img, price, name } = search;
//                 return `
//         <div class="cart-item">
//         <i onclick="removeItem(${id})"  class="bi bi-x-lg"></i>
//           <img width="100" src=${img} alt="flower" class="image" />

//           <div class="details">

//             <div class="title-price-x">
//               <h4 class="title-price">
//                 <p>${name}</p>
//               </h4>
//             </div>

//             <div class="cart-buttons">
//               <div id="cartButtons" >
//                 <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
//                 <div id=${id} class="quantity">${item}</div>
//                 <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
//               </div>
//             </div>

//             <h3 class="cart-item-price">$ ${item * price}</h3>

//           </div>
//         </div>
//         `;
//             })
//             .join(""));
//     };
// }

// generateCartItems();
/**
 * ! used to increase the selected product item quantity by 1
 */

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**
 * ! Used to remove 1 selected product card from basket
 * ! using the X [cross] button
 */

let removeItem = (id) => {
    let selectedItem = id;
    console.log(selectedItem);
    // var myobjArr = document.getElementsByClassName(selector);
    // myobjArr[0].remove();
    basket = basket.filter((x) => x.id !== selectedItem.id);

    generateShop();

    localStorage.setItem("data", JSON.stringify(basket));
};