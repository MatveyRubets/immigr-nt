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

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-container img');
const maxSlides = slides.length;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + maxSlides) % maxSlides;
    const container = document.querySelector('.slider-container');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// ...existing code...

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('measurementsModal');
    const modalTrigger = document.getElementById('modal-window');
    const closeButton = document.querySelector('.modal-close');

    modalTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});