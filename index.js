const CHECKBOX_BUTTON_CLICKED_CLASSNAME = "checkbox-button-click";
const CHECKBOX_TEXT_CLICKED_CLASSNAME = "text-checkbox-click";
const CONTAINER_CHECKBOX_CLICKED_CLASSNAME = "text-checkbox-click";

const outputContainerNode = document.querySelector(".js-output-container");
const containerCheckBoxNode = document.querySelector(".js-container-checkbox");
const checkBoxButtonNode = document.querySelector(".js-checkbox-button");
const checkBoxCloseButtonNode = document.querySelector(".js-close-button");
const checkBoxTextNode = document.querySelector(".js-text-checkbox");
const inputButtonNode = document.querySelector(".js-input-button");
const inputFilmNode = document.querySelector(".js-input-film");

let outputListHTML = "";

checkBoxButtonNode.addEventListener("click", toggleCheckBox);
inputButtonNode.addEventListener("click", function () {
  const inputFilm = getFilmFromUser(inputFilmNode.value);
  console.log(inputFilm);
  clearInputFilmFromUser();
  outputListHTML += `
  <div class="js-container-checkbox container-checkbox">
          <div class="checkbox">
            <button class="js-checkbox-button checkbox-button"></button>
            <input
              class="input-checkbox"
              type="radio"
              id="scales"
              name="scales"
            />
            <label class="js-text-checkbox text-checkbox" for="scales"
              >${inputFilm}</label
            >
          </div>

          <button class="js-close-button close-button"></button>
        </div>`;
  outputContainerNode.innerHTML = outputListHTML;
});

// Получение фильма от пользователя

function getFilmFromUser(film) {
  if (film.value == "") {
    return null;
  }
  // const expence = parseInt(inputExpenceNode.value);

  return film;
}

// Очистка поля ввода фильма

function clearInputFilmFromUser() {
  inputFilmNode.value = "";
}

// Отмечаем просмотренный фильм

function toggleCheckBox() {
  checkBoxButtonNode.classList.toggle(CHECKBOX_BUTTON_CLICKED_CLASSNAME);
  checkBoxTextNode.classList.toggle(CHECKBOX_TEXT_CLICKED_CLASSNAME);
  containerCheckBoxNode.classList.toggle(CONTAINER_CHECKBOX_CLICKED_CLASSNAME);
}
