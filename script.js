fetch("products.json")
  .then(res => res.json())
  .then(data => {
    let container = document.querySelector(".product-container");
    data.forEach(item => {
      container.innerHTML += `
        <div class="product">
          <img src="images/${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.price} BDT</p>
          <button>Add to Cart</button>
        </div>
      `;
    });
  });
