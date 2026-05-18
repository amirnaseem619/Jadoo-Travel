const menuIcon = document.getElementById("open-menu");
const closeIcon = document.getElementById("close-menu");
const navLinks = document.querySelector(".nav-links");

// Cards wrapper
const cardsWrapper = document.querySelector(".cards-wrappers");



menuIcon.addEventListener("click", function () {
  navLinks.classList.add("show");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  navLinks.classList.remove("show");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});



// Cards Wrappers
const cardsData = [
  {
    image: "images/Rectangle1.jpg",
    place: "Rome, Italy",
    price: "$5.42k",
    days: "10 days trip",
  },

  {
    image: "images/Rectangle2.jpg",
    place: "London, UK",
    price: "$4.2k",
    days: "12 days trip"
  },

  {
    image: "images/Rectangle3.jpg",
    place: "Full Europe",
    price: "$15k",
    days: "28 days trip"
  }
];

for(i = 0; i < cardsData.length; i++){
    cardsWrapper.innerHTML += `

    <div class="card1">
    <div class="inner-image">
    <img src="${cardsData[i].image}" alt="">
    </div>

    <!-- Place and Cost -->

    <div class="place-cost">
    <p>${cardsData[i].place}</p>
    <p>${cardsData[i].price}</p>
    </div>

    <!-- Navigate and Days -->
    
    <div class="navigate-days">

    <i class="fa-solid fa-location-arrow"></i>
    <p>${cardsData[i].days}

    </div>
    </div>
    `;
}


