const dropDownMenu = function () {
  this.classList.toggle("clicked");
};

document.querySelector(".target").addEventListener("click", dropDownMenu);
