document.addEventListener("DOMContentLoaded", function () {
	const playerName = sessionStorage.getItem("playerName") || "Player";
	document.getElementById("playerNameDisplay").textContent = playerName;
});
