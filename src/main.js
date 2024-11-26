const topMenu = document.getElementById("td-top-menu");
const toggleTopMenuIcon = document.getElementById("td-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("td-menu-expanded");
  } else {
    if (topMenu.classList.contains("td-menu-expanded")) {
      topMenu.classList.remove("td-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
