/* Модальное окно feedback */

const overlayFeedback = document.querySelector(".overlay-modal-feedback");
const feedbackLink = document.querySelector(".btn-contacts");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector("#feedback-name-input");
const feedbackEmail = feedbackPopup.querySelector("#feedback-email-input");
const feedbackText = feedbackPopup.querySelector(".feedback-letter");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-feedback-show");
  overlayFeedback.classList.add("overlay-modal-show");
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-feedback-show");
  feedbackPopup.classList.remove("modal-error");
  overlayFeedback.classList.remove("overlay-modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (feedbackPopup.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-feedback-show");
      feedbackPopup.classList.remove("modal-error");
      overlayFeedback.classList.remove("overlay-modal-show");
    }
  }
});

/* Модальное окно map */

const overlayMap = document.querySelector(".overlay-modal-map");
const mapLink = document.querySelector(".map-contacts");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
  overlayMap.classList.add("overlay-modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
  overlayMap.classList.remove("overlay-modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (mapPopup.classList.contains("modal-map-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map-show");
      overlayMap.classList.remove("overlay-modal-show");
    }
  }
});

/* Services-slider */

const serviceLinks = document.querySelectorAll(".services-slider-btn");
const serviceSlides = document.querySelectorAll(".services-slider-item");

for (let i = 0; i < serviceLinks.length; i++) {
  serviceLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let j = 0; j < serviceSlides.length; j++) {
      if (serviceSlides[j].classList.contains("slide-current")) {
        serviceSlides[j].classList.remove("slide-current");
      }
      if (serviceLinks[j].classList.contains("services-current-btn")) {
        serviceLinks[j].classList.remove("services-current-btn");
      }
      if (serviceLinks[j].disabled === true) {
        serviceLinks[j].disabled = false;
      }
    }
    serviceSlides[i].classList.add("slide-current");
    serviceLinks[i].classList.add("services-current-btn");
    serviceLinks[i].disabled = true;
    serviceLinks[i].blur();
  });
}

/* Catalog-slider */

const catalogLinks = document.querySelectorAll(".btn-slide-number");
const catalogSlides = document.querySelectorAll(".catalog-slider-item");
const catalogPrev = document.querySelector(".btn-slide-previous");
const catalogNext = document.querySelector(".btn-slide-next");
let catalogCurrent = 1;

//устанавливаем номер текущего слайда
function getCatalogSlideNumber() {
  for (let i = 0; i < catalogSlides.length; i++) {
    if (catalogSlides[i].classList.contains("slide-current")) {
      catalogCurrent = i;
    }
    return catalogCurrent;
  }
}

//проверяем, не крайние ли текущие слайды, если крайние, отключаем кнопку prev или next
function checkCatalogSlides(catalogCurrent) {
  if (catalogCurrent > 0) {
    catalogPrev.disabled = false;
  } else {
    catalogPrev.disabled = true;
  }
  if (catalogCurrent < catalogSlides.length - 1) {
    catalogNext.disabled = false;
  } else {
    catalogNext.disabled = true;
  }
}

for (let i = 0; i < catalogLinks.length; i++) {
  catalogLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogCurrent = getCatalogSlideNumber();
    for (let j = 0; j < catalogLinks.length; j++) {
      if (catalogLinks[j].classList.contains("btn-number-current")) {
        catalogLinks[j].classList.remove("btn-number-current");
      }
      if (catalogSlides[j].classList.contains("slide-current")) {
        catalogSlides[j].classList.remove("slide-current");
      }
      if (catalogLinks[j].disabled === true) {
        catalogLinks[j].disabled = false;
      }
    }
    catalogLinks[i].classList.add("btn-number-current");
    catalogSlides[i].classList.add("slide-current");
    catalogLinks[i].disabled = true;
    catalogCurrent = i;
    checkCatalogSlides(catalogCurrent);
  })
}

catalogPrev.addEventListener("click", function (evt) {
  evt.preventDefault();
  catalogCurrent = getCatalogSlideNumber();
  catalogSlides[catalogCurrent - 1].classList.add("slide-current");
  catalogLinks[catalogCurrent - 1].classList.add("btn-number-current");
  catalogLinks[catalogCurrent - 1].disabled = true;
  catalogSlides[catalogCurrent].classList.remove("slide-current");
  catalogLinks[catalogCurrent].classList.remove("btn-number-current");
  catalogLinks[catalogCurrent].disabled = false;
  catalogCurrent--;
  checkCatalogSlides(catalogCurrent);
});

catalogNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  catalogCurrent = getCatalogSlideNumber();
  catalogSlides[catalogCurrent + 1].classList.add("slide-current");
  catalogLinks[catalogCurrent + 1].classList.add("btn-number-current");
  catalogLinks[catalogCurrent + 1].disabled = true;
  catalogSlides[catalogCurrent].classList.remove("slide-current");
  catalogLinks[catalogCurrent].classList.remove("btn-number-current");
  catalogLinks[catalogCurrent].disabled = false;
  catalogCurrent++;
  checkCatalogSlides(catalogCurrent);
});
