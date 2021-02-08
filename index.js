const houses = [
    {
        id: "1",
        title: "Royal Style Mansion, Caesarea, IL, Israel",
        price: "157 728 017",
        details: "5 Bedrooms, 3 Bathrooms, 102 Sqt Ft",
        img: "./assets/1.jpg", 
    },
    {
        id: "2",
        title: "90 Jule Pond Drive Southampton, USA",
        price: "145 000 000",
        details: "4 Bedrooms, 3 Bathrooms, 112 Sqt Ft",
        img: "./assets/2.jpg", 
    },
    {
        id: "3",
        title: "Like No Other Manalapan, FL, USA",
        price: "125 350 000",
        details: "4 Bedrooms, 3 Bathrooms, 85 Sqt Ft",
        img: "./assets/3.jpg", 
    },
    {
        id: "4",
        title: "Pacific Coast Highway, Malibu, USA",
        price: "85 350 000",
        details: "5 Bedrooms, 3 Bathrooms, 104 Sqt Ft",
        img: "./assets/4.jpg", 
    },
    {
        id: "5",
        title: "Rancho Santa, USA",
        price: "130 000 000",
        details: "7 Bedrooms, 5 Bathrooms, 121 Sqt Ft",
        img: "./assets/5.jpg", 
    },
    {
        id: "6",
        title: "Extraordinary Prestige House",
        price: "95 550 000",
        details: "6 Bedrooms, 4 Bathrooms, 97 Sqt Ft",
        img: "./assets/6.jpg", 
    },
    {
        id: "7",
        title: "Other Geneve, Switzerland",
        price: "185 500 000",
        details: "5 Bedrooms, 3 Bathrooms, 75 Sqt Ft",
        img: "./assets/7.jpg", 
    },
    {
        id: "8",
        title: "Cannon Point, FL, USA",
        price: "250 800 000",
        details: "4 Bedrooms, 3 Bathrooms, 65 Sqt Ft",
        img: "./assets/8.jpg", 
    },
]

//variables
const InfoButton = document.querySelector(".infobtn");
const CardDom = document.querySelector(".card__container");
const windowDom = document.querySelector(".details-window");
const closeBtn = document.querySelector(".closeBtn");


//display houses
window.addEventListener('DOMContentLoaded', function () {
    displayHouses(houses);
});

/* DISPLAYING CARDS */
function displayHouses(galleryHouses) {
    let displayCards = galleryHouses.map(function (item) {
        return `
        <!--CARD-->
        <div class="card card__box" style="width: 18rem;">
            <img src=${item.img} class="card-img-top" alt="Houses">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
            </div>
            <div class="card__p ">
              <p class="price">$ ${item.price}</p>
              <p class="description">${item.details}</p>
            </div>
            <div class="card-body">
              <button class="btn btn-primary infobtn" data-id=${item.id}>See details</button>
            </div>
        </div>
        <!--END OF THE CARD-->
        `
    });

displayCards = displayCards.join("");
CardDom.innerHTML = displayCards;
}


document.addEventListener('DOMContentLoaded', function() {
   // Displaying Modal
   const InfoButton = document.querySelector(".infobtn");
InfoButton.addEventListener("click", openModal);
function openModal() {
    console.log("Hello");
}
});