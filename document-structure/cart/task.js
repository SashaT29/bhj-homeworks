let products = document.qerySelector('.products');
let productsCart = document.querySelector('.cart__products');

function addProduct(event) {
    let item = event.target;
    let counter;

    if(item.classList.contains(('product__quantity-control_dec')) || (item.classList.contains('product__quantity-control_inc'))){
        counter = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    }

    if(item.classList.contains('.product__quantity-control_dec')) {
        if(Number(counter.innerText) > 1) counter.innerText = --counter.innerText;
    }

    if(item.classList.contains('product__quantity-control_inc')) {
        counter.innerText = ++counter.innerText;
    }

    if(item.classList.contains('product__add')){
        let card = item.closest('.product');
        let productInfo = {
            id: card.dataset.id,
            img: card.querySelector('.product__image').getAttribute('src'),
            count: card.querySelector('.product__quantity-value').innerText,
        };

        let itemInCard = productsCart.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCard) {
            let countInCart = itemInCard.querySelector('.cart__product-count');
            countInCart.innerText = Number(countInCart.innerHTML) + Number(productInfo.count);
        } else {
            productsCart.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${productInfo.id}">
            <img class="cart__product-image" src="${productInfo.img}">
            <div class="cart__product-count">${productInfo.count}</div>
            <div class="cart__product-remove>&times;</div>
            </div>`)
        }

    }
}