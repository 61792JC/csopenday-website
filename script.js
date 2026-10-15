// Source - https://stackoverflow.com/a/74183835
// Posted by voaneves, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-13, License - CC BY-SA 4.0

// Updated to use the repo's existing theme class names: `light-theme` and `dark-theme`.
// Ensures the body has black text for light-theme and white text for dark-theme.

const LIGHT = "light-theme";
const DARK = "dark-theme";
const btn = document.getElementById("theme");

btn.addEventListener("click", function () {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    // User prefers dark: the button should toggle the light theme on/off
    if (document.body.classList.contains(LIGHT)) {
      // currently light -> switch back to dark
      document.body.classList.remove(LIGHT);
      document.body.classList.add(DARK);
      document.body.style.color = "white";
    } else {
      // enable light theme
      document.body.classList.add(LIGHT);
      document.body.classList.remove(DARK);
      document.body.style.color = "black";
    }
  } else {
    // User prefers light: the button should toggle the dark theme on/off
    if (document.body.classList.contains(DARK)) {
      // currently dark -> switch back to light
      document.body.classList.remove(DARK);
      document.body.classList.add(LIGHT);
      document.body.style.color = "black";
    } else {
      // enable dark theme
      document.body.classList.add(DARK);
      document.body.classList.remove(LIGHT);
      document.body.style.color = "white";
    }
  }
});
