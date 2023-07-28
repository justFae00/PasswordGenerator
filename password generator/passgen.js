const generatedPassword = document.getElementById("generated-password");
const selector = document.getElementById("selector");
const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*_+=-`/*|'?][}{)(";

function generator() {
  let result = "";
  for (let index = 0; index < selector.value; index++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  /*self note: innerHTML only works for elements which have opening and closing tags 
  while input is a self-closing tag, therefore it doesn't work with direct HTML properties 
  (also in CSS, we can't use HTML to change the properties of input)*/
  generatedPassword.value = result;
}

function copy() {
  let copyText = generatedPassword;
  navigator.clipboard.writeText(copyText.value);
  popUpMsg(copyText.value);
}

function popUpMsg(message) {
  const div = document.createElement("div");
  div.id = "notification";

  if (message !== "") {
    div.textContent = message + " copied to clipboard!";
  } else {
    div.textContent = "There is nothing to be copied!";
  }

  document.body.appendChild(div);

  setTimeout(() => {
    document.body.removeChild(div);
  }, 3200);
}
