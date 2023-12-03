const dataFetching = (mainContainerId, data, fixColumn, innerHtmlElement) => {
    const mainContainer = document.getElementById(mainContainerId);

    data.map(element => {
        // Create a new card element
        const content = document.createElement('div');
        content.className = fixColumn;
        content.innerHTML = innerHtmlElement({ element: element });

        // Append the card element to the container
        mainContainer.appendChild(content);
    });
}

const productsData = [
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

const productsHtmlData = ({ element }) => {

    const { img, name, description, price } = element;
    return (
        `
      <div class="card">
        <div class="overflow-hidden" style="height: 220px; width: 100%">
            <img src="${img}" class="card-img-top object-fit-cover w-100"
                alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text mb-2">${description}</p>
            <div class="d-flex justify-content-between my-3 align-items-center">
                <h4 class="text-primary">$${price}</h4>
                <span class="text-warning">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </span>
            </div>
            <div class="d-flex justify-content-between my-2 align-items-center">
                <button class="btn btn-primary">
                    <span>
                        <i class="fa-solid fa-pen"></i>
                    </span>
                    Edit
                </button>

                <button class="btn btn-danger">
                    <span>
                        <i class="fa-solid fa-trash"></i>
                    </span>
                    Delete
                </button>
          </div>
        </div>
    </div>
      `
    )
}

dataFetching("productsContainer", productsData, `col-md-3`, productsHtmlData);



/*
 const productsListData = [
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

const productsListHtmlData = ({element}) => {

    const { img, name, description, price } = element;
    return (
        `
        <div class="card mb-3 bg-box border-0">
            <div class="row g-0 align-items-center ">
                <div class="col-md-2">
                    <img src="${img}" style="height: 150px;"
                        class="img-fluid rounded-start" alt="products image">
                </div>
                <div class="col-md-4">
                    <div class="card-body">
                        <h4 class="card-title text-dark">${name}</h4>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
                <div class="col-md-1">
                    <h3 class="text-primary ">$${price}</h3>
                </div>
                <div class="col-md-2">
                    <span class="text-warning fs-6">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </span>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-6">
                            <button class="btn btn-primary">
                                <span>
                                    <i class="fa-solid fa-pen"></i>
                                </span>
                                Edit
                            </button>

                        </div>
                        <div class="col-6">

                            <button class="btn btn-danger">
                                <span>
                                    <i class="fa-solid fa-trash"></i>
                                </span>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )
}


dataFetching("productListContainer", productsListData, `col-md-12`, productsListHtmlData);
*/


// const mainContainer = document.getElementById('productListContainer');
// productsData.forEach((product) => {
//   const productHTML = productsListHtmlData({ element: product });
//   const productElement = document.createElement('div');
//   productElement.innerHTML = productHTML;
//   mainContainer.appendChild(productElement);
// });





// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   function callFunction(func, name) {
//     func(name);
//   }
  
//   callFunction(greet, "Bob");


// function greet(person) {
//     console.log("Hello,", person.name);
//   }
  
//   function greetAll(people) {
//     for (let person of people) {
//       greet(person);
//     }
//   }
  
//   const people = [
//     { name: "Alice" },
//     { name: "Bob" },
//     { name: "Charlie" }
//   ];
  
//   greetAll(people);
  
  

// function createPerson(name, age, city) {
//     return {
//       name: name,
//       age: age,
//       city: city,
//       greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.city}.`);
//       }
//     };
//   }
  
//   function greetPeople(people) {
//     for (let person of people) {
//       person.greet();
//     }
//   }
  
//   const alice = createPerson("Alice", 30, "New York");
//   const bob = createPerson("Bob", 25, "San Francisco");
//   const charlie = createPerson("Charlie", 22, "Chicago");
  
//   const people = [alice, bob, charlie];
  
//   greetPeople(people);
  

// const rowContainer = document.querySelector("#rowContainer");


// productsData.forEach(card => {
//     // Create a new card element
//     const cardElement = document.createElement('div');
//     cardElement.className = 'col-md-3';
//     cardElement.innerHTML = `


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

//     // Append the card element to the container
//     rowContainer.appendChild(cardElement);
// });