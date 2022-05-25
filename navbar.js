var navbar = document.getElementById("navbar");

document.getElementById("navbar").addEventListener("scroll", stickyBar);

window.onscroll = function () {
  stickyBar();
};

function stickyBar() {
  if (window.pageYOffset >= navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
