const KEY = "theme";
const form = document.querySelector(".theme-form");
const radios = form.querySelectorAll('input[name="theme"]');

function applyTheme(value) {
    if (value === "light" || value === "dark") {
        document.documentElement.setAttribute("data-theme", value);
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
}

function loadTheme() {
    const saved = localStorage.getItem(KEY) || "auto";
    applyTheme(saved);

    for (const radio of radios) {
        if (radio.value === saved) {
            radio.checked = true;
        }
    }
}

form.addEventListener("change", function (event) {
    const value = event.target.value;
    applyTheme(value);
    localStorage.setItem(KEY, value);
});

loadTheme();
