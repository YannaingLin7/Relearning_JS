const hamburgerContainerTag = document.querySelector(".hamburger-menu-container");
const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlay-menu");
const liTags = document.querySelectorAll("li");

hamburgerContainerTag.addEventListener("click", () => {
  if(hamburgerContainerTag.classList.contains('is-opened')) {
    hamburgerLine2Tag.classList.remove('hide-line2');
    hamburgerLine1Tag.classList.remove('rotate-plus-45deg');
    hamburgerLine3Tag.classList.remove('rotate-minus-45deg');
    hamburgerContainerTag.classList.remove('is-opened');
    overlayMenuTag.classList.remove('show-overlay-menu');
    for(let i = 0; i < liTags.length; i++) {
      liTags[i].classList.remove("move-li-up")
    };
  } else {
    hamburgerLine2Tag.classList.add("hide-line2");
    hamburgerLine1Tag.classList.add("rotate-plus-45deg");
    hamburgerLine3Tag.classList.add("rotate-minus-45deg");
    hamburgerContainerTag.classList.add("is-opened");
    overlayMenuTag.classList.add("show-overlay-menu");
    for(let i = 0; i < liTags.length; i++) {
      liTags[i].classList.add("move-li-up")
    };
  }
});