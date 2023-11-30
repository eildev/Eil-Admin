/* -----------------------
sidebar toggle  
-------------------------- */
const toggleBtn = document.getElementById("sidebar-toggle");
const toggleBtn2 = document.getElementById("sidebar-toggle2");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".main-container");
const dropdown = document.querySelector(".dropdown");
const dropdownItem = document.querySelector(".dropdown-item");
const menuArrow = document.querySelector(".menu-arrow");

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");

searchIcon.onclick = function () {
  searchBar.classList.toggle("active");
};


dropdown.addEventListener("click", function () {
  dropdownItem.classList.toggle("active");
});

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  container.classList.toggle("active");
});

toggleBtn2.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  container.classList.toggle("active");
});



/* -----------------------
sidebar dropdown menu 
-------------------------- */
$(".sidebar_menu > ul > li").click(function (e) {
  // remove active from already active 
  $(this).siblings().removeClass('my_active');

  // add active class to clicked
  $(this).toggleClass("my_active");

  // submenu open 
  $(this).find("ul").slideToggle();

  // close other submenu if any open 
  $(this).siblings().find("ul").slideUp();

  //remove active class from submenu item
  $(this).siblings().find("ul").find("li").removeClass("my_active");
})

/* -----------------------
line chart
-------------------------- */
// const lineChart = document.getElementById('line_chart');

// new Chart(lineChart, {
//   type: 'line',
//   data: {
//     labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//     datasets: [{
//       label: 'weekly report',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       fill: false,
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1
//     }]
//   },
// });




/* -----------------------
pie chart
-------------------------- */
// const pieChart = document.getElementById('pie_chart');
// new Chart(pieChart, {
//   type: 'pie',
//   data: data = {
//     labels: [
//       'Red',
//       'Blue',
//       'Yellow'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   }
// });




const cardData = [
  {
    id: 1,
    name: 'Quality T-shirt',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/fashion.jpg',
    price: 29,
  },
  {
    id: 2,
    name: 'Halloween Favorite book',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/book.jpg',
    price: 17,
  },
  {
    id: 3,
    name: 'Best Furniture',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/furniture.jpg',
    price: 200,
  },
  {
    id: 4,
    name: 'Vivo 11X series',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/electronics.png',
    price: 150,
  },
  {
    id: 5,
    name: 'Fresh Vegetables',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/grocery.jpg',
    price: 50,
  },
  {
    id: 1,
    name: 'Quality T-shirt',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/fashion.jpg',
    price: 29,
  },
  {
    id: 2,
    name: 'Halloween Favorite book',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/book.jpg',
    price: 17,
  },
  {
    id: 3,
    name: 'Best Furniture',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/furniture.jpg',
    price: 200,
  },
  {
    id: 4,
    name: 'Vivo 11X series',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/electronics.png',
    price: 150,
  },
  {
    id: 5,
    name: 'Fresh Vegetables',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/grocery.jpg',
    price: 50,
  },
  {
    id: 1,
    name: 'Quality T-shirt',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/fashion.jpg',
    price: 29,
  },
  {
    id: 2,
    name: 'Halloween Favorite book',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/book.jpg',
    price: 17,
  },
  {
    id: 3,
    name: 'Best Furniture',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/furniture.jpg',
    price: 200,
  },
  {
    id: 4,
    name: 'Vivo 11X series',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/electronics.png',
    price: 150,
  },
  {
    id: 5,
    name: 'Fresh Vegetables',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/grocery.jpg',
    price: 50,
  },
  {
    id: 1,
    name: 'Quality T-shirt',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/fashion.jpg',
    price: 29,
  },
  {
    id: 2,
    name: 'Halloween Favorite book',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/book.jpg',
    price: 17,
  },
  {
    id: 3,
    name: 'Best Furniture',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/furniture.jpg',
    price: 200,
  },
  {
    id: 4,
    name: 'Vivo 11X series',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/electronics.png',
    price: 150,
  },
  {
    id: 5,
    name: 'Fresh Vegetables',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
    img: '../img/categories/grocery.jpg',
    price: 50,
  },
];


const rowContainer = document.querySelector("#rowContainer");


cardData.forEach(card => {
  // Create a new card element
  const cardElement = document.createElement('div');
  cardElement.className = 'col-md-3';
  cardElement.innerHTML = `


  <div class="card">
      <div class="overflow-hidden" style="height: 220px; width: 100%">
          <img src="${card.img}" class="card-img-top object-fit-cover w-100"
              alt="...">
      </div>
      <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text mb-2">${card.description}</p>
          <div class="d-flex justify-content-between align-items-center">
           <a href="#" class="btn btn-primary">Add to Cart</a>
          <h4 class="text-primary">$${card.price}</h4>
        </div>
      </div>
  </div>
  `;

  // Append the card element to the container
  rowContainer.appendChild(cardElement);
});



const dataFetching = (mainContainerId, data, fixColumn) => {
  const mainContainer = document.querySelector(mainContainerId);

  data.forEach(element => {
    // Create a new card element
    const content = document.createElement('div');
    content.className = fixColumn;
    content.innerHTML = innerHtmlElement;

    // Append the card element to the container
    rowContainer.appendChild(cardElement);
  });
}



// `
//     <div class="card">
//         <div class="overflow-hidden" style="height: 220px; width: 100%">
//             <img src="${card.img}" class="card-img-top object-fit-cover w-100"
//                 alt="...">
//         </div>
//         <div class="card-body">
//             <h5 class="card-title">${card.name}</h5>
//             <p class="card-text mb-2">${card.description}</p>
//             <div class="d-flex justify-content-between align-items-center">
//              <a href="#" class="btn btn-primary">Add to Cart</a>
//             <h4 class="text-primary">$${card.price}</h4>
//           </div>
//         </div>
//     </div>
//     `;