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

// Menu code adapted from Cem Eygi Media on Youtube:
// https://www.youtube.com/watch?v=mh36Kts-wX8

const menu_button = document.getElementById(`menu`);
const nav_list = document.getElementById(`nav_list`);

menu_button.addEventListener(`click`, () => {
  if (nav_list.style.display === `none` || !nav_list.style.display) {
    nav_list.style.display = `flex`;
  } else {
    nav_list.style.display = `none`;
  }
});

const nav_links = document.getElementsByClassName(`nav_link`);

for (var i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener(`click`, () => {
    if (window.innerWidth <= 480) {
      nav_list.style.display = `none`;
    }
  });
}

window.addEventListener(`resize`, () => {
  if (window.innerWidth > 480) {
    nav_list.style.display = `flex`;
  } else {
    nav_list.style.display = `none`;
  }
});
