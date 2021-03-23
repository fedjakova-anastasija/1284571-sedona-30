//'use strict'

const form = document.querySelector(".application-form");
const formLink = document.querySelector(".application-form-link");
const formContent = document.querySelector(".application-form-content");
const formArrivalDate = document.querySelector("#search-arrival-date");
const formAdultsCount = document.querySelector("#search-adults");
const formChildrenCount = document.querySelector("#search-children");

let isStorageSupport = true;
let storageFormAdultsCount = "";
let storageFormChildrenCount = "";

try {
  storageFormAdultsCount = localStorage.getItem("formAdultsCount");
  storageFormChildrenCount = localStorage.getItem("formChildrenCount");
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener("click", function () {
  showForm();
})

formLink.addEventListener("keyup", function(evt) {
  if (evt.keyCode === 13) {
    showForm();
  }
})

form.addEventListener("submit", function (evt) {
  if (Number(formAdultsCount.value) <= 0 || Number(formChildrenCount.value) < 0) {
    evt.preventDefault();
    form.classList.remove("application-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("application-form-error");
  } else if (isStorageSupport) {
    if (formAdultsCount.value) {
      localStorage.setItem("formAdultsCount", formAdultsCount.value);
    }
    if (formChildrenCount.value) {
      localStorage.setItem("formChildrenCount", formChildrenCount.value);
    }
  }
});

function showForm() {
  formContent.classList.toggle("show-form");
  formArrivalDate.focus();

  formAdultsCount.value = storageFormAdultsCount;
  formChildrenCount.value = storageFormChildrenCount;
}
