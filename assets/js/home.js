 
(function() {
/**
   * Show/Hide extra projects
   */
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showMoreBtn");
  const extraProjects = document.querySelectorAll(".extra-project");

  // Try to detect sticky navbar height (if exists)
  const navbar = document.querySelector("header, nav, .navbar, .navmenu"); 
  const navbarOffset = navbar ? navbar.offsetHeight + 10 : 80; // fallback = 80px

  button.addEventListener("click", () => {
    // Toggle visibility of extra projects
    extraProjects.forEach(p => p.classList.toggle("d-none"));

    // Get text span + icon inside button
    const textSpan = button.querySelector(".btn-text");
    const icon = button.querySelector("i");

    if (textSpan.textContent.trim() === "More Projects") {
      // Expand projects
      textSpan.textContent = "Show Less";
      icon.classList.remove("bi-chevron-down");
      icon.classList.add("bi-chevron-up");
    } else {
      // Collapse projects
      textSpan.textContent = "More Projects";
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");

      // Scroll to make button visible just under navbar
      const y = button.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({
        top: y-100,
        behavior: "smooth"
      });
    }
  });
});

})();
