'use strict'

const form = document.querySelector(".application-form");
const formTitle = document.querySelector(".application-form-title");
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

formTitle.addEventListener("click", function () {
  formContent.classList.toggle("show-form");
  formArrivalDate.focus();

  formAdultsCount.value = storageFormAdultsCount;
  formChildrenCount.value = storageFormChildrenCount;
})

form.addEventListener("submit", function (evt) {
  if (!formAdultsCount.value || !formChildrenCount.value) {
    evt.preventDefault();
  } else if (isStorageSupport) {
    if (formAdultsCount.value) {
      localStorage.setItem("formAdultsCount", formAdultsCount.value);
    }
    if (formChildrenCount.value) {
      localStorage.setItem("formChildrenCount", formChildrenCount.value);
    }
  }
});
