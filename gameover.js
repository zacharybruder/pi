const msg = document.getElementById("msg");

if (sessionStorage.getItem("win") === "1") {
	msg.textContent = "Congratulations! You won!";
} else {
	msg.textContent = "Game over! You lost!";
}
