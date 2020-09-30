"use strict";
import galleryItems from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const modalWindow = document.querySelector(".js-lightbox");
const modalPicture = document.querySelector(".lightbox__image");
const closerBtn = document.querySelector("button[data-action=close-lightbox]");
const lightboxOverlay = document.querySelector(".lightbox__content");
let newUrlPicture;
let newAltPicture;
const renderMarkupGalleryItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      >
    </a>
  </li>
  `;
};

const renderListItem = links => links.reduce((acc, el) => (acc += renderMarkupGalleryItem(el)), "");
const addToScreen = (container, position, element) => {
  container.insertAdjacentHTML(position, element);
};

addToScreen(galleryList, "beforeend", renderListItem(galleryItems));

galleryList.addEventListener("click", handleOpenModal);

function handleOpenModal(e) {
  e.preventDefault();
  modalWindow.classList.add("is-open");
  setAttributePicture(e.target.dataset.source, e.target.alt);
  closerBtn.addEventListener("click", handleCloseModal);
  lightboxOverlay.addEventListener("click", handleLightboxOverlayClick);
  window.addEventListener("keydown", handleKeyPress);
  window.addEventListener("keydown", handleArrowPress);
  newUrlPicture = e.target.dataset.source;
  newAltPicture = e.target.alt;
}
function setAttributePicture(src, alt) {
  modalPicture.setAttribute("src", src);
  modalPicture.setAttribute("alt", alt);
}
function handleCloseModal() {
  modalPicture.setAttribute("src", "");
  modalPicture.setAttribute("alt", "");
  modalWindow.classList.remove("is-open");
  closerBtn.removeEventListener("click", handleCloseModal);
  lightboxOverlay.removeEventListener("click", handleLightboxOverlayClick);
  window.removeEventListener("keydown", handleKeyPress);
  window.removeEventListener("keydown", handleArrowPress);
}

function handleLightboxOverlayClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  handleCloseModal();
}

function handleKeyPress(e) {
  if (e.code !== "Escape") {
    return;
  }
  handleCloseModal();
}

function handleArrowPress(e) {
  let findIndexGallery = galleryItems.findIndex(el => el.original === newUrlPicture);
  if (e.code === "ArrowRight") {
    if (findIndexGallery === galleryItems.length - 1) {
      return;
    } else {
      findIndexGallery += 1;
    }
  }
  if (e.code === "ArrowLeft") {
    if (findIndexGallery === 0) {
      return;
    } else {
      findIndexGallery -= 1;
    }
  }
  newUrlPicture = galleryItems[findIndexGallery].original;
  newAltPicture = galleryItems[findIndexGallery].description;
  setAttributePicture(newUrlPicture, newAltPicture);
}
