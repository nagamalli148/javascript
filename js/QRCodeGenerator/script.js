let container = document.querySelector(".container");
let qrInput = document.querySelector("#text");
let generateBtn = document.querySelector("#generate");
let img = document.querySelector("#qr-image");

let preInput;

genearateBtn.onclick = function () {
  let input = qrInput.value.trim();

  if (!input || input === preInput) {
    alert("this fieldshould be empty and different withprevious input");
    return;
  } else {
    preInput = input;
    genearateBtn.innerText = "Generating QR Code....";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
    img.onload = function () {
      container.classList.add("active");
      genearateBtn.innerText = "Generate QR Code";
    };
  }
};