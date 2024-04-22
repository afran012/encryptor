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

// btnCopy.addEventListener('click', function() {
//   const tempTextArea = document.createElement('textarea');
//   tempTextArea.value = msjEncrypt.textContent;
//   document.body.appendChild(tempTextArea);
//   tempTextArea.select();
//   document.execCommand('copy');
//   document.body.removeChild(tempTextArea);
// });

const rules = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

/*  function encrypt(text) {
    let encryptedText = text;
    for (let key in rules) {
      let re = new RegExp(key, 'g');
      encryptedText = encryptedText.replace(re, rules[key]);
    }
    return encryptedText;
  }
  
  function decrypt(text) {
    let decryptedText = text;
    for (let key in rules) {
      let re = new RegExp(rules[key], 'g');
      decryptedText = decryptedText.replace(re, key);
    }
    return decryptedText;
  }
  
  window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('textarea').forEach(function (element) {
      element.style.height = (element.scrollHeight) + "px";
      element.addEventListener('input', function (event) {
        event.target.style.height = 'auto';
        event.target.style.height = (event.target.scrollHeight) + "px";
      });
    });
  
    const btnEncriptar = document.querySelector('.btnEncriptar');
    const btnDesencriptar = document.querySelector('.btnDesencriptar');
    const inputEncriptar = document.querySelector('.inputEncriptar');
    const msjEncrypt = document.querySelector('.msj-encrypt');
    const imgMsjEncryptSection = document.querySelector('.img-msj-encrypt-section');
    const msjEncryptSection = document.querySelector('.msj-encrypt-section');
  
    btnEncriptar.addEventListener('click', function() {
      const encryptedText = encrypt(inputEncriptar.value);
      msjEncrypt.textContent = encryptedText;
      imgMsjEncryptSection.style.display = 'none';
      msjEncryptSection.style.display = 'block';
    });
  
    btnDesencriptar.addEventListener('click', function() {
      const decryptedText = decrypt(msjEncrypt.textContent);
      inputEncriptar.value = decryptedText;
      imgMsjEncryptSection.style.display = 'block';
      msjEncryptSection.style.display = 'none';
    });
  });
 */
