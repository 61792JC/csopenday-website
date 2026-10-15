// Source - https://stackoverflow.com/a/74183835
// Posted by voaneves, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-13, License - CC BY-SA 4.0

// Simplified and made robust: wait for DOM, guard missing button, toggle between
// `light-theme` and `dark-theme` regardless of the system preference, and
// explicitly set text color (black for light, white for dark).

const LIGHT = "light-theme";
const DARK = "dark-theme";

function applyThemeClass(theme) {
  if (theme === LIGHT) {
    document.body.classList.add(LIGHT);
    document.body.classList.remove(DARK);
    document.body.style.color = "black";
  } else {
    document.body.classList.add(DARK);
    document.body.classList.remove(LIGHT);
    document.body.style.color = "white";
  }
}

// Ensure the listener is attached after the DOM is ready and guard for missing button
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}

function initThemeToggle() {
  // Respect any initialization already applied in index.html, but ensure body color is set
  if (document.body.classList.contains(LIGHT)) applyThemeClass(LIGHT);
  else if (document.body.classList.contains(DARK)) applyThemeClass(DARK);

  const btn = document.getElementById("theme");
  if (!btn) return; // nothing to do if button is missing

  btn.addEventListener("click", function () {
    // Toggle based on the current class on the body, not the system preference
    if (document.body.classList.contains(DARK)) {
      applyThemeClass(LIGHT);
    } else {
      applyThemeClass(DARK);
    }
  });
}
