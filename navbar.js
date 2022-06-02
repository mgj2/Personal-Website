const menu_button = document.getElementById(`menu`);
const nav_list = document.getElementById(`nav_list`);

menu_button.addEventListener(`click`, () => {
  if (nav_list.style.display === `none`) {
    nav_list.style.display = `flex`;
  } else {
    nav_list.style.display = `none`;
  }
});
