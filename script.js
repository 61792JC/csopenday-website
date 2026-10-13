// Source - https://stackoverflow.com/a/74183835
// Posted by voaneves, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-13, License - CC BY-SA 4.0

document.getElementById("theme").addEventListener("click", function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.body.classList.toggle("light-mode");
    else document.body.classList.toggle("dark-mode");
  });
