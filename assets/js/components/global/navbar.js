// ============== Navigation Menu ===============

// When the user clicks on the hamburger/close button, toggle between showing and hiding the dropdown menu
function toggleNav() {
  var hamburgerIcon = document.getElementById("hamburger-icon");
  var closeIcon = document.getElementById("close-icon");
  var dropDown = document.getElementById("dropdown-nav");

  if (dropDown.style.display === "none") {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    dropDown.style.display = "flex";
  } else {
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    dropDown.style.display = "none";
  }
}

// When the user scrolls down the page, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
};

// When the user clicks outside the navbar, hide the dropdown menu
document.addEventListener("click", function handleClickOutsideBox(event) {
  var navbar = document.getElementById("navbar");
  var dropDown = document.getElementById("dropdown-nav");

  if (!navbar.contains(event.target) && dropDown.style.display === "flex") {
    dropDown.style.display = "none";
  }
});
