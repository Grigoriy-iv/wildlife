let burgerMenu = document.querySelector(".burger-menu");
let menuBody = document.querySelector(".menu__body");
let survival = document.querySelector(".survival");
if (burgerMenu) {
	burgerMenu.addEventListener("click", menu_burger);
	function menu_burger() {
		document.body.classList.toggle("lock")
		burgerMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
		survival.classList.toggle("hidden");
	}
}