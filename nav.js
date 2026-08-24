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
