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