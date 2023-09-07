const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
  parentTag.innerHTML = "";
  const toastAlertContainerTag = document.createElement("div");
  toastAlertContainerTag.classList.add("toastAlertContainer");
  // create toastAlertTextTag
  const toastAlertTextTag = document.createElement("div");
  toastAlertTextTag.append(
    `We use cookies . Your continued use of our site implies you agree to this. See details.`
  );
  toastAlertTextTag.classList.add("toastAlertText");

  // create closeButtonTag
  const closeButtonTag = document.createElement("div");
  closeButtonTag.append("Close");
  closeButtonTag.classList.add("btn", "btn-light");

  // append toastAlertTextTag, closeButtonTag to toastAlertContainerTag
  toastAlertContainerTag.append(toastAlertTextTag, closeButtonTag);

  // append toastAlertContainerTag to parentTag
  parentTag.append(toastAlertContainerTag);
  parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
  setTimeout(() => {
    parentTag.style.bottom = `0px`;
  }, 100);

  // Attach event listener on closeButtonTag
  closeButtonTag.addEventListener("click", () => {
    localStorage.setItem("accepted", "2");
    parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
  });
};

window.addEventListener("load", () => {
  const accepted = localStorage.getItem("accepted"); // "1"
  if (accepted !== "1") {
    openToastAlert();
  }
});
