/* 
  TACOM Design System Scripts
  Includes Scroll Reveal and other UI enhancements.
*/

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  reveal();
  
  // Add smooth appearance for hero tags
  const heroTags = document.querySelectorAll('.tc-hero-tag');
  heroTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
  });
});
