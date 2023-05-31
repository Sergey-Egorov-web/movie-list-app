const CHECKBOX_BUTTON_CLICKED_CLASSNAME = "checkbox-button-click";
const CHECKBOX_TEXT_CLICKED_CLASSNAME = "text-checkbox-click";
const CONTAINER_CHECKBOX_CLICKED_CLASSNAME = "text-checkbox-click";

const containerCheckBoxNode = document.querySelector(".js-container-checkbox");
const checkBoxButtonNode = document.querySelector(".js-checkbox-button");
const checkBoxCloseButtonNode = document.querySelector(".js-close-button");
const checkBoxTextNode = document.querySelector(".js-text-checkbox");

checkBoxButtonNode.addEventListener("click", toggleCheckBox);

function toggleCheckBox() {
  checkBoxButtonNode.classList.toggle(CHECKBOX_BUTTON_CLICKED_CLASSNAME);
  checkBoxTextNode.classList.toggle(CHECKBOX_TEXT_CLICKED_CLASSNAME);
  containerCheckBoxNode.classList.toggle(CONTAINER_CHECKBOX_CLICKED_CLASSNAME);
}
