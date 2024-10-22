document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that you want to animate
  const elementsToAnimate = document.querySelectorAll(
    ".left-content, .company-section h2, .card-section-inner h2, .card-section-inner .main-card-para, .testimonials-name-profession h5, .testimonials-name-profession h6, .testimonials-heading"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the visible class
        observer.unobserve(entry.target); // Stop observing once the animation has played
      }
    });
  });

  elementsToAnimate.forEach((element) => {
    observer.observe(element); // Start observing each element
  });
});
