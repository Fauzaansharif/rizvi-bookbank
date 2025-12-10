document.addEventListener("DOMContentLoaded", () => {
  // 1. Highlight Active Navigation Link
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    // Check if href matches path, OR if path is empty/index.html and link is index.html
    if (
      link.getAttribute("href") === currentPath ||
      (currentPath === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // 2. Scroll Animation (Fade In)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Target all major sections and cards
  const elementsToAnimate = document.querySelectorAll(
    ".branch, .hero, .form-container, .grid-container, .card"
  );

  elementsToAnimate.forEach((el) => {
    el.classList.add("hidden"); // Ensure they are hidden initially via JS too
    observer.observe(el);
  });

  // 3. Form Submission Simulation
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your information has been submitted successfully.");
      form.reset();
    });
  });
});
