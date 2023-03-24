let btns = document.querySelectorAll(".button");
let text = document.querySelector(".text-inner");
let lorem =
  "alert arguments Array blur Boolean callee caller captureEvents clearInterval clearTimeout close closed confirm constructor Date defaultStatus document escape eval find focus frames Function history home Infinity innerHeight innerWidth isFinite isNaN java length location locationbar Math menubar moveBy name NaN netscape Number Object open opener outerHeight outerWidth Packages pageXOffset pageYOffset parent parseFloat parseInt personalbar print prompt prototype RegExp releaseEvents resizeBy resizeTo routeEvent scroll scrollbars scrollBy scrollTo self setInterval setTimeout status statusbar stop String toolbar top toString unescape unwatch valueOf watch window";

let loremArr = lorem.split("");

loremArr.map((item) => {
  let span = document.createElement("span");
  let text = document.createTextNode(item);
  span.appendChild(text);

  document.querySelector(".text-inner").appendChild(span);
});

let letter = text.querySelectorAll("span");

letter[0].style = "background-color: #495057;";

let i = 0;
document.addEventListener("keydown", (e) => {
  let name = e.key;

  if (name == "Backspace") {
    if (i > 0 && letter[i - 1].innerText != " ") {
      letter[i].style = "background-color: transparent;";
      i--;
    }
    letter[i].style = "background-color: #495057;";
  } else if (name.length > 2) {
    return;
  } else if (letter[i].innerText == name) {
    letter[i].style = "background-color: #38b000;";
    if (letter.length > i) i++;
    letter[i].style = "background-color: #495057;";
  } else if (letter[i].innerText != name) {
    letter[i].style = "background-color: #ba181b;";
    if (letter.length > i) i++;
    letter[i].style = "background-color: #495057;";
  }
  lgo;
  console.log(i);
});

document.addEventListener("keydown", (e) => {
  let name = e.key;
  for (let i = 0; i < btns.length; i++) {
    if (name == "CapsLock") name = "caps";
    else if (name == "Backspace") name = "←";

    if (btns[i].innerHTML.toLowerCase() == name.toLowerCase()) {
      btns[i].style = `opacity: 0.5;`;
      setTimeout(() => {
        btns[i].style = `opacity: 1;`;
      }, 100);
    }
  }
});
