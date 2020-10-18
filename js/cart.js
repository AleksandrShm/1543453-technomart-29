/* Модальное окно Cart */

const overlayCart = document.querySelector(".overlay-modal-cart");
const cartLink = document.querySelectorAll(".btn-green");
const cartPopup = document.querySelector(".modal-cart");
const cartContinue = cartPopup.querySelector(".modal-cart-continue");
const cartClose = cartPopup.querySelector(".modal-close");

for(let i = 0; i < cartLink.length; i++) {
  cartLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-cart-show");
    overlayCart.classList.add("overlay-modal-show");
  });
}

cartContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
  overlayCart.classList.remove("overlay-modal-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
  overlayCart.classList.remove("overlay-modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (cartPopup.classList.contains("modal-cart-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
      overlayCart.classList.remove("overlay-modal-show");
    }
  }
});
