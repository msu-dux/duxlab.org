/* Hide the header on scroll-down, reveal it on scroll-up. */
(function () {
	"use strict";

	var header = document.querySelector(".site-header");
	if (!header) { return; }

	var lastY = window.pageYOffset || document.documentElement.scrollTop;
	var ticking = false;
	var hideThreshold = header.offsetHeight;

	var raf = window.requestAnimationFrame ||
		function (cb) { return window.setTimeout(cb, 16); };

	function onScroll() {
		var currentY = window.pageYOffset || document.documentElement.scrollTop;
		var delta = currentY - lastY;

		if (currentY <= hideThreshold) {
			header.classList.remove("is-hidden");
		} else if (delta > 0) {
			header.classList.add("is-hidden");
		} else if (delta < 0) {
			header.classList.remove("is-hidden");
		}

		header.classList.toggle("is-scrolled", currentY > 4);

		lastY = currentY;
		ticking = false;
	}

	window.addEventListener("scroll", function () {
		if (!ticking) {
			raf(onScroll);
			ticking = true;
		}
	}, { passive: true });
})();

/* Toggle the mobile nav menu open/closed. */
(function () {
	"use strict";

	var toggle = document.querySelector(".nav-toggle");
	var nav = document.getElementById("main-nav");
	if (!toggle || !nav) { return; }

	function closeNav() {
		toggle.setAttribute("aria-expanded", "false");
		nav.classList.remove("is-open");
	}

	toggle.addEventListener("click", function () {
		var isOpen = nav.classList.toggle("is-open");
		toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
	});

	nav.addEventListener("click", function (event) {
		if (event.target.tagName === "A") {
			closeNav();
		}
	});
})();
