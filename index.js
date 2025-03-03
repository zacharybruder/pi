document
	.getElementById("nameForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const name = document.getElementById("playerName").value.trim();
		if (name) {
			sessionStorage.setItem("playerName", name);
			window.location.href = "game.html";
		}
	});

if (sessionStorage.getItem("win") === "1") {
	window.location.href = "gameover.html";
}
