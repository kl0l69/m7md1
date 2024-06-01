function toggleMobileMenu() {
  var navbarCollapse = document.getElementById("navbarCollapse");
  navbarCollapse.classList.toggle("open");
}

// This function will be called when any nav link is clicked
function closeMenu() {
  var navbarCollapse = document.getElementById("navbarCollapse");
  // Check if the menu is open, if so, close it
  if (navbarCollapse.classList.contains("close")) {
    navbarCollapse.classList.remove("close");
  }
}

// Add event listener to the toggle button
var navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", toggleMobileMenu);

// Add event listener to each nav link
var navLinks = document.querySelectorAll("#mySidenav a.nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});
