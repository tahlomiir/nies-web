/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleNav() {
    var hamburgerIcon = document.getElementById("hamburger-icon");
    var closeIcon = document.getElementById("close-icon");
    var navMenu = document.getElementById("dropdown-nav");

    if (navMenu.style.display === "none") {
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
      navMenu.style.display = "flex";
    } else {
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
      navMenu.style.display = "none";
    }
  }