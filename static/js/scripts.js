// ===============================
// HEADER SCROLL
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
  
    if (!header) return;
  
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
  
    onScroll();
    window.addEventListener("scroll", onScroll);
  });
  