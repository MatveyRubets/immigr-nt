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

	const video = document.getElementById("responsive-video");
    const videoSource = document.createElement("source");

    function setVideoSource() {
        const screenWidth = window.innerWidth;

        // Set video source based on screen width
        if (screenWidth >= 768) {
            videoSource.src = "./assets/immi-home.mp4"; // Desktop video
        } else {
            videoSource.src = "./assets/phone-video.mp4"; // Mobile video
        }

        videoSource.type = "video/mp4";
        video.innerHTML = ""; // Clear existing sources
        video.appendChild(videoSource);
        video.load(); // Reload the video with the new source
    }

    // Set video source on page load
    setVideoSource();

    // Update video source on window resize
    window.addEventListener("resize", setVideoSource);

	const videoSection = document.getElementById("video-section");
    const productsSection = document.getElementById("products-section");

	videoSection.addEventListener("click", () => {
		const targetPosition = productsSection.offsetTop;
		const startPosition = window.scrollY;
		const distance = targetPosition - startPosition;
		const duration = 500; // Duration in milliseconds
		let start = null;

		function smoothScroll(timestamp) {
			if (!start) start = timestamp;
			const progress = timestamp - start;
			const ease = progress / duration < 0.5
				? 2 * (progress / duration) ** 2
				: 1 - Math.pow(-2 * (progress / duration) + 2, 2) / 2; // Ease-in-out
			window.scrollTo(0, startPosition + distance * ease);

			if (progress < duration) {
				requestAnimationFrame(smoothScroll);
			}
		}

		requestAnimationFrame(smoothScroll);
	});

    if (document.body.classList.contains("main-page")) {
        document.addEventListener("scroll", () => {
            const header = document.querySelector(".navbar");
            const scrollPosition = window.scrollY;
            const screenHeight = window.innerHeight;

            if (scrollPosition > screenHeight / 2) {
                header.classList.add("visible");
            } else {
                header.classList.remove("visible");
            }
        });
    }
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

