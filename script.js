"use strict";

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const errMsg = document.getElementById("err-msg");
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const changeHandler = () => {
  const email = validateEmail(input.value);
  if (input.value == "") {
    errMsg.classList.add("hidden");
    input.classList.remove("border-error", "mb-10");
  } else if (!email) {
    errMsg.classList.remove("hidden");
    input.classList.add("border-error", "mb-10");
  } else {
    errMsg.classList.add("hidden");
    input.classList.remove("border-error", "mb-10");
  }
};

btn.addEventListener("click", changeHandler);
