let btns = document.querySelectorAll(".button");
let text = document.querySelector(".text-inner");
let audioBtn = document.querySelector(".audio");
let audioIcon = document.querySelectorAll(".icon");
let mobile = document.querySelector("#mobile");
let startButton = document.querySelector("#startButton");

let bottom = document.querySelector(".bottom");
let info = document.querySelector(".info");

let audio = new Audio(
  "./Mechanical-Keyboard-single-button-presses-10-www.FesliyanStudios.com (mp3cut.net).wav"
);
let lorem =
  "alert arguments Array blur Boolean callee caller captureEvents clearInterval clearTimeout close closed confirm constructor Date defaultStatus document escape eval find focus frames Function history home Infinity innerHeight innerWidth isFinite isNaN java length location locationbar Math menubar moveBy name NaN netscape Number Object open opener outerHeight outerWidth Packages pageXOffset pageYOffset parent parseFloat parseInt personalbar print prompt prototype RegExp releaseEvents resizeBy resizeTo routeEvent scroll scrollbars scrollBy scrollTo self setInterval setTimeout status statusbar stop String toolbar top toString unescape unwatch valueOf watch window abstract	arguments	await	boolean break	byte	case catch char class	const	continue debugger	default	delete	do double	else	enum	eval export	extends	false	final finally	float	for	function goto	if	implements	import in	instanceof	int	interface let	long	native	new null	package	private	protected public	return	short	static super	switch	synchronized	this throw	throws	transient	true try	typeof	var	void volatile	while	with	yield";

if (/Android|iPhone/i.test(navigator.userAgent)) {
  document.body.innerHTML = `
    <div id="mobile" class="mobile">
      <h1 class="mobile-text">Iltimos dasturni Komyuterda oching</h1>
    </div>
  `;
} // agar Android yoki Iphone bolsa sayt ishlamaydi

document.addEventListener("keydown", (e) => {
  bottom.style = "display: block;";
  info.style = "display: none;"; 
});

let i = 0;

startButton.addEventListener("click", (e) => {
  i = 1
  bottom.style = "display: block;";
  info.style = "display: none;";
});

let r = 0;

audioIcon[0].style = "display: none;";
audioIcon[1].style = "display: inline-block;";

audioBtn.addEventListener("click", () => {
  if (r % 2 == 1) {
    audioIcon[0].style = "display: none;";
    audioIcon[1].style = "display: inline-block;";
  } else if (r % 2 == 0) {
    audioIcon[0].style = "display: inline-block;";
    audioIcon[1].style = "display: none;";
  }
  r++;
}); // ovoz ochirish va yoqish

// let loremArr = lorem.split("");

let loremTextArr = lorem.split(" "); // sozlardan tashkil topgan Array  //  length = 80
let loremTextArrNew = []; // bosh Array. sozlar uchun yaratilgan Array

for (; loremTextArrNew.length != 50; ) {
  let randomNum = Math.floor(Math.random() * 1000); // 100 gacham bolgan sonlar

  if (randomNum < loremTextArr.length) {
    loremTextArrNew.push(loremTextArr[randomNum]);
  }
} // so'zlarni random tarzda jonatadi

let loremArr = loremTextArrNew.toString().replace(/,/g, " ").split(""); // harflar

loremArr.map((item) => {
  let span = document.createElement("span");
  let text = document.createTextNode(item);
  span.appendChild(text);

  document.querySelector(".text-inner").appendChild(span);
}); // har birini <span>  ichiga oladi

let letter = text.querySelectorAll("span"); // har bir harf

letter[1].style = "background-color: #495057;"; // birinchi harf ortini boyaydi

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
}); // harflar ortini bo'yaydi

function createExplosion() {
  var snd = new Audio(
    "./Mechanical-Keyboard-single-button-presses-10-www.FesliyanStudios.com (mp3cut.net).wav"
  );
  snd.volume = 0.4;
  snd.play();
} // ovoz chiqarish uchun funksiya

document.addEventListener("keydown", (e) => {
  let name = e.key;

  if (r % 2 == 0) {
    createExplosion();
  }

  for (let i = 0; i < btns.length; i++) {
    if (name == "CapsLock") name = "caps";
    else if (name == "Backspace") name = "←";
    else if (name == " ") name = "";

    if (btns[i].innerHTML.toLowerCase() == name.toLowerCase()) {
      btns[i].style = `opacity: 0.5;`;
      setTimeout(() => {
        btns[i].style = `opacity: 1;`;
      }, 100);
    }
  }
}); // klaviatura bosilganida bosilgan harfni korsatadi
