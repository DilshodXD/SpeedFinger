let btns = document.querySelectorAll(".button");
let text = document.querySelector(".text-inner").innerHTML.toLowerCase();

let i = 0;
document.addEventListener("keydown", (e) => {
  let name = e.key;

  if (text[i] == name) {
    i += 1;
  }
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
