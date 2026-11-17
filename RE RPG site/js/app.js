import { renderMenu } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchInputEl = document.getElementById("searchInput");

    renderMenu();
    searchInputEl.addEventListener("input", event => {
        renderMenu(event.target.value);
    });
});
