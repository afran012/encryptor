window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("textarea").forEach(function (element) {
    element.style.height = element.scrollHeight + "px";
    element.addEventListener("input", function (event) {
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
    });
  });
});

const btnCopy = document.querySelector(".btn-copy");

btnCopy.addEventListener("click", () => {
  const element = document.querySelector(".msj-encrypt");
  const innerHTML = element.innerHTML;
  navigator.clipboard
    .writeText(innerHTML)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
  console.log(innerHTML);
});

/* const rules = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
}; */

function encrypt(text) {
  let encryptedText = "";
  for (let char of text) {
    switch (char) {
      case "e":
        encryptedText += "enter";
        break;
      case "i":
        encryptedText += "imes";
        break;
      case "a":
        encryptedText += "ai";
        break;
      case "o":
        encryptedText += "ober";
        break;
      case "u":
        encryptedText += "ufat";
        break;
      default:
        encryptedText += char;
    }
  }
  return encryptedText;
}
function decrypt(text) {
  let decryptedText = text;
  const rules = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  for (let key in rules) {
    let re = new RegExp(key, "g");
    decryptedText = decryptedText.replace(re, rules[key]);
  }
  return decryptedText;
}
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const inputEncriptar = document.querySelector(".inputEncriptar");
const msjEncrypt = document.querySelector(".msj-encrypt");
const imgMsjEncryptSection = document.querySelector(".img-msj-encrypt-section");
const msjEncryptSection = document.querySelector(".msj-encrypt-section");
imgMsjEncryptSection.style.display = "block";
msjEncryptSection.style.display = "none";

btnEncriptar.addEventListener("click", function () {
  const encryptedText = encrypt(inputEncriptar.value);
  msjEncrypt.textContent = encryptedText;
  imgMsjEncryptSection.style.display = "none";
  msjEncryptSection.style.display = "block";
});

btnDesencriptar.addEventListener("click", function () {
  console.log(inputEncriptar.value);
  const decryptedText = decrypt(inputEncriptar.value);
  msjEncrypt.textContent = decryptedText;
  imgMsjEncryptSection.style.display = "none";
  msjEncryptSection.style.display = "block";
});
