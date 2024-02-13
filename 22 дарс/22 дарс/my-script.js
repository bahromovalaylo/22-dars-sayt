const wrapper = document.querySelector(".wrapper");
const modal = document.querySelector(".modal");
const cards = document.querySelector(".cards");
const ochish = document.querySelector("#open");
const tostify = document.querySelector(".tostify");
const basketcount = document.querySelector(".basket-count"); // Ism o'zgaruvchisini qo'shing (HTML-da uchun class="basket-count")


const data = [
  {
    id: 1,
    img: "./imgs/coca-cola-classic_product_image-desktop.webp",
    nomi: "Colacola",
    narxi: "12000",
    soni: 1,
  },
  {
    id: 2,
    img: "./imgs/fanta-0-33-glass.970.jpg",
    nomi: "Fanta",
    narxi: "12000",
    soni: 1,
  },
  {
    id: 3,
    img: "./imgs/Sprite.jpg",
    nomi: "Sprite",
    narxi: "12000",
    soni: 1,
  },
  {
    id: 4,
    img: "./imgs/Chortoq.jpg",
    nomi: "Chortoq",
    narxi: "12000",
    soni: 1,
  },
];

//modal oyna ochish
ochish.addEventListener("click", () => {
  modal.style.transform = "translateX(0)";
  modal.style.transition = "transform 1s";
});




//yangi bosh box
const basket = JSON.parse(localStorage.getItem("basket")) || [];


// Modalga malumot chiqarish



function deleteItem(id) {
  basket.map((item, index) => {
    if (item.id === id) {
      basket.splice(index, 1);
    }
  });
  localStorage.setItem("basket", JSON.stringify(basket));
  basketmap();
}

function decrement(id) {
  basket.map((item) => {
    if (item.id === id) {
      if (item.soni > 1) {
        item.soni = item.soni - 1;
      }
    }
  });
  basketmap();
}

function increment(id) {
  basket.map((item) => {
    if (item.id === id) {
      item.soni = item.soni + 1;
    }
  });
  localStorage.setItem("basket", JSON.stringify(basket));
  basketmap();
}




// Modalga malumot chiqarish

function basketmap() {  // Исправлено название функции
    modal.innerHTML = "";  // Очищаем содержимое модального окна перед добавлением новых элементов
    basket.map((item) => {
        modal.innerHTML += `
            <div class="card-modal">
                <img src="${item.img}">
                <p>${item.nomi}</p>
                <p>${item.narxi}</p>
                <button onclick="decriment(${item.id})">-</button>
                <p>${item.soni}</p>
                <button onclick="increment(${item.id})">+</button>
                <button onclick="deleteItem(${item.id})">D</button>

            </div>
        `;
    });
}

//total price
// ...

function totalprice() {
  let totalPrice = 0;
  basket.forEach((item) => {
    totalPrice += parseInt(item.narxi) * item.soni;
  });
  return totalPrice;
}

// ...

function basketmap() {
  modal.innerHTML = "";
  basket.map((item) => {
    modal.innerHTML += `
      <div class="card-modal">
        <img src="${item.img}">
        <p>${item.nomi}</p>
        <p>${item.narxi}</p>
        <button onclick="decrement(${item.id})">-</button>
        <p>${item.soni}</p>
        <button onclick="increment(${item.id})">+</button>
        <button onclick="deleteItem(${item.id})">D</button>
      </div>
    `;
  });

  // Total price qismi
  modal.innerHTML += `
    <div class="total-price">
      <p>Total Price: $${totalprice()}</p>
    </div>
  `;
}


function backetquti(index) {
  tostifyy();
    basket.push(data[index]);
    basketmap();  // Вызываем исправленную функцию для обновления содержимого модального окна
    localStorage.setItem('basket', JSON.stringify(basket));
}

// ...



data.map((item, index) => {
  cards.innerHTML += `
        <div class="card">
            <img src="${item.img}">
            <p>${item.nomi}</p>
            <p>${item.narxi}</p>
            <p>${item.soni}</p>
            <button onclick="backetquti(${index})">Buy</button>

        </div>
    `;
});

cards.addEventListener('click',()=>{
    modal.style.transform = "translateX(400px)";
    modal.style.transition = "transform 1s";
}
)
//tostify oynasini yopish

function tostifyy1(){
  tostify.style.transform= "translateY(-580px)";

}
function tostifyy() {
  tostify.style.transform= "translateY(0)";
}
setInterval(()=>{
  tostifyy1();

},4200);


// 

setInterval(() => {
  basketcount.textContent = basket.length;
  if (basket.length === 0) {
    basketcount.style.display = "none";
  } else {
    basketcount.style.display = "block";
  }
}, 500);

