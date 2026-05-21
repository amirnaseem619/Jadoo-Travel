const menuIcon = document.getElementById("open-menu");
const closeIcon = document.getElementById("close-menu");
const navLinks = document.querySelector(".nav-links");

// Cards wrapper
const cardsWrapper = document.querySelector(".cards-wrappers");

// Booking Steps
const bookingSteps = document.querySelector(".booking-steps");



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



// --> Cards Wrappers <--
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


// --> BOOKING STEPS <--
const bookingData = [
  {
    icon: "images/choose.png",
    title: "Select Destination",
    subTitle: "Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Voluptates, deleniti itaque."
  },
  {
    icon: "images/payment.png",
    title: "Make Payment",
    subTitle: "Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Voluptates, deleniti itaque."
  },
  {
    icon: "images/select.png",
    title: "Reach Airport on Selected Date",
    subTitle: "Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Voluptates, deleniti itaque."
  },
];


for(k = 0; k < bookingData.length; k++){
  bookingSteps.innerHTML += `

  <div class="step">
              <div class="step-icon">
                <img src=${bookingData[k].icon} alt="" />
              </div>
              <div class="h3-p">
                <h3>${bookingData[k].title}</h3>
                <p>
                 ${bookingData[k].subTitle}
                </p>
              </div>
            </div>

  `
}

