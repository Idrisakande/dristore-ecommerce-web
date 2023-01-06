const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const loginform = document.getElementById("loginform");
const regform = document.getElementById("regform");
const indicator = document.getElementById("indicator");
function register() {
  regform.style.transform = "translateX(0rem)";
  loginform.style.transform = "translateX(0rem)";
  indicator.style.transform = "translateX(6rem)";
}
function login() {
  regform.style.transform = "translateX(18rem)";
  loginform.style.transform = "translateX(18rem)";
  indicator.style.transform = "translateX(0rem)";
}

// <!-- js for product gallery -->

const ProductImg = document.getElementById("ProductImg");
const SmallImg = document.getElementsByClassName("SmallImg");

SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};
