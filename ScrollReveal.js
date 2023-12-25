//Insitialised the Scroll-Reveal component

ScrollReveal({
	reset: true,
	distance: "40px",
	duration: 2000,
});

// Customisation of Scroll Reveal rules for different classes

ScrollReveal().reveal(".banner__title,.heading,.social,.footerTitle", {
	delay: 200,
	origin: "top",
});
ScrollReveal().reveal(".banner__text,.cards__item", {
	delay: 300,
	origin: "top",
	distance: "50px",
});
