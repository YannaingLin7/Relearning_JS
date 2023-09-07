const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const box1Tag = document.querySelector(".box-1");
const box2Tag = document.querySelector(".box-2");
const box3Tag = document.querySelector(".box-3");
const box4Tag = document.querySelector(".box-4");
const box5Tag = document.querySelector(".box-5");
// const boxes = document.querySelectorAll(".box")



const tabs = ["home", "services", "about us", "contact us", "login"];

const handleChangeTab = (event) => {
  const clickedLiId = event.target.id;
  const clickedLiTag = document.getElementById(clickedLiId);
  const clickedLiTagWidth = clickedLiTag.offsetWidth;
  const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
  sliderTag.style.width = clickedLiTagWidth + "px";
  sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;
  console.log(clickedLiId)

  if(clickedLiId == 0) {
    box1Tag.classList.add('is-opened');
    box2Tag.classList.replace('is-opened','is-closed');
    box3Tag.classList.replace('is-opened','is-closed');
    box4Tag.classList.replace('is-opened','is-closed');
    box5Tag.classList.replace('is-opened','is-closed');
  }else if(clickedLiId == 1) {
    box2Tag.classList.add('is-opened');
    box1Tag.classList.replace('is-opened','is-closed');
    box3Tag.classList.replace('is-opened','is-closed');
    box4Tag.classList.replace('is-opened','is-closed');
    box5Tag.classList.replace('is-opened','is-closed');
  }else if(clickedLiId == 2) {
    box3Tag.classList.add('is-opened'); 
    box1Tag.classList.replace('is-opened','is-closed');
    box2Tag.classList.replace('is-opened','is-closed');
    box4Tag.classList.replace('is-opened','is-closed');
    box5Tag.classList.replace('is-opened','is-closed');
  } else if(clickedLiId == 3) {
    box4Tag.classList.add('is-opened');
    box1Tag.classList.replace('is-opened','is-closed');
    box2Tag.classList.replace('is-opened','is-closed');
    box3Tag.classList.replace('is-opened','is-closed');
    box5Tag.classList.replace('is-opened','is-closed');
  } else if(clickedLiId == 4) {
    box5Tag.classList.add('is-opened');
    box1Tag.classList.replace('is-opened','is-closed');
    box2Tag.classList.replace('is-opened','is-closed');
    box3Tag.classList.replace('is-opened','is-closed');
    box4Tag.classList.replace('is-opened','is-closed');
  }
}

for(let i = 0; i < tabs.length; i++) {
  const liTag = document.createElement("li");
  liTag.append(tabs[i].toUpperCase());
  liTag.id = i;
  liTag.addEventListener("click", handleChangeTab);
  ulTag.append(liTag);
  if( i === 0 ) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
}
