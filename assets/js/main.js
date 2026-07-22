const pieces = document.querySelectorAll(".grid-container div");
const colors = ["#f3f7ff", "#235bff", "#d14054", "#f5d36a", "#74d5ad"];
const resetButton = document.querySelector(".reset-button");

function randomNumber(min, max) {
	return Math.random() * (max - min) + min;
}

function randomItem(items) {
	return items[Math.floor(Math.random() * items.length)];
}

function randomize() {
	pieces.forEach(function (piece) {
		const scale = randomNumber(0.62, 1.36);
		const translateX = randomNumber(-46, 46);
		const translateY = randomNumber(-34, 34);
		const rotate = randomNumber(-42, 42);
		const opacity = randomNumber(0.68, 1);

		piece.style.transform = `
			translate(${translateX}vw, ${translateY}vh)
			rotate(${rotate}deg)
			scale(${scale})
		`;
		piece.style.color = randomItem(colors);
		piece.style.opacity = opacity;
		piece.style.filter = `blur(${randomNumber(0, 1.4)}px)`;
	});
}

function resetGrid(event) {
	event.stopPropagation();
	pieces.forEach(function (piece) {
		piece.style.transform = "";
		piece.style.color = "";
		piece.style.opacity = "";
		piece.style.filter = "";
	});
}

document.addEventListener("click", randomize);
resetButton.addEventListener("click", resetGrid);
