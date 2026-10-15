// Source - https://stackoverflow.com/a/74183835
// Posted by voaneves, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-13, License - CC BY-SA 4.0



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


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}

function initThemeToggle() {
  if (document.body.classList.contains(LIGHT)) applyThemeClass(LIGHT);
  else if (document.body.classList.contains(DARK)) applyThemeClass(DARK);

  const btn = document.getElementById("theme");
  if (!btn) return; // ignores if button missing

  btn.addEventListener("click", function () {
    if (document.body.classList.contains(DARK)) {
      applyThemeClass(LIGHT);
    } else {
      applyThemeClass(DARK);
    }
  });
}
