document.addEventListener("DOMContentLoaded", function () {
	const burgerMenu = document.getElementById("burger-menu");
	const closeMenu = document.getElementById("close-menu");
	const navOverlay = document.getElementById("nav-list");

	// Open menu
	burgerMenu.addEventListener("click", function () {
		navOverlay.classList.add("active");
		closeMenu.style.display = "flex";
		document.body.classList.add("menu-open");
		mobileCart.parentElement.style.display = "block"; // Show mobile cart
		desktopCart.parentElement.style.display = "none"; // Hide desktop cart
	});

	// Close menu
	function closeMenuHandler() {
		navOverlay.classList.remove("active");
		closeMenu.style.display = "none";
		document.body.classList.remove("menu-open");
		mobileCart.parentElement.style.display = "none"; // Hide mobile cart
		desktopCart.parentElement.style.display = "block"; // Show desktop cart
	}

	closeMenu.addEventListener("click", closeMenuHandler);

	// Close menu when clicking outside
	navOverlay.addEventListener("click", function (event) {
		if (!event.target.closest(".nav-list") || event.target.closest("a")) {
			closeMenuHandler();
		}
	});
});

let currentIndex = 0;

function changeSlide(direction) {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const totalSlides = images.length;
    
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
