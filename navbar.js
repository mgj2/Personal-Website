window.onscroll = function () {
  scrollFunction();
};

// Code adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function scrollFunction() {
  if (window.pageYOffset > 100) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}

// Code adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}
