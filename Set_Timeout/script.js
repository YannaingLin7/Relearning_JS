const buttonTag = document.querySelector(".btn-primary");
const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
  parentTag.innerHTML = "";
  const toastAletTag = document.createElement("div");
  toastAletTag.append("Your Form is successfully submitted.");
  toastAletTag.classList.add('toast-alert')
  parentTag.append(toastAletTag);

  toastAletTag.style.left = `-${toastAletTag.offsetWidth}px`;
  setTimeout(() => {
    toastAletTag.style.left = "0px";
  }, 400);
  setTimeout(() => {
    toastAletTag.style.left = `-${toastAletTag.offsetWidth}px`;
  }, 5000);
}

buttonTag.addEventListener("click",openToastAlert);