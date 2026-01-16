/* TOGGLE SWITCH TO DARK AND LIGHT MODE */
const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(savedTheme);
toggle.checked = savedTheme === "light";


toggle.addEventListener("change", () => {
   if (toggle.checked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
   } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark")
   }
});