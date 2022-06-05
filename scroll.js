// Code adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset > 100) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}
