// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// scroll section active link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //   sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //   remove toggle icon and navbar
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

// adding the typing effect on the name
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Designer", "Data Analyst"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// adding the typing effect on the description
const typed1 = new Typed(".detailsaboutme", {
  strings: [
    "I am deeply passionate about the convergence of machine learning and web development. With a solid foundation in web development, encompassing front-end and back-end technologies, I specialize in crafting intuitive and responsive web applications.My fascination with machine learning lies in its capacity to discern patterns and derive insights from data. Eager to explore the synergy between machine learning and web development.",
  ],
  typeSpeed: 1,
});

// adding the toggle functionallity to the ""about me" section
function toggleTab(event, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document
    .getElementsByClassName("tab-contents")[0]
    .getElementsByTagName("ul");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }
  tabLinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active-link");
  }
  document.getElementById(tabName).classList.add("active");
  event.currentTarget.classList.add("active-link");
}

// adding show more functionallity using js
document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");
  const portfolioBoxes = document.querySelectorAll(".portfolio-box");
  const numToShow = 3;
  let currentIndex = 6;

  function showNextItems() {
    for (let i = currentIndex; i < currentIndex + numToShow; i++) {
      if (portfolioBoxes[i]) {
        const img = portfolioBoxes[i].querySelector("img");
        img.classList.remove("hidden");
      }
    }
    currentIndex += numToShow;

    // Check if all items are displayed
    if (currentIndex >= portfolioBoxes.length) {
      showMoreBtn.classList.add("hidden");
      showLessBtn.classList.remove("hidden");
    }
  }

  function showPreviousItems() {
    // Hide the last set of items
    for (let i = currentIndex - 12; i < currentIndex; i++) {
      if (portfolioBoxes[i]) {
        const img = portfolioBoxes[i].querySelector("img");
        img.classList.add("hidden");
      }
    }
    currentIndex -= 12;

    // Check if there are more items to show
    if (currentIndex < portfolioBoxes.length) {
      showMoreBtn.classList.remove("hidden");
      showLessBtn.classList.add("hidden");
    }
  }

  showMoreBtn.addEventListener("click", showNextItems);
  showLessBtn.addEventListener("click", showPreviousItems);
});

// directing the form details into google sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbypzYDJDBUKr5aDW74NZTf0QzmawLTV6Kw3k4ZCx9Tmse9opST64Tm32q9Lq48SiSiDzA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
