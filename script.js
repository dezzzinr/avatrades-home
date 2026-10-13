// ============================================================================
// AvaTrades marketing site — plain JS, no build step, no dependencies.
//
// 1) SET YOUR APP URL BELOW. Every button with [data-app-link] (Login,
//    Get started, footer links, etc.) will point to this address.
// ============================================================================
const APP_URL = "https://ava-trades.vercel.app/"; // <-- change this to your real AvaTrades app URL

document.querySelectorAll("[data-app-link]").forEach((el) => {
  el.setAttribute("href", APP_URL);
});

// ---------- Theme (light/dark), persisted + respects system preference ----------
const THEME_KEY = "avatrades_site_theme";
function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}
applyTheme(getPreferredTheme());
document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// ---------- Mobile nav ----------
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
menuBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobileNav.classList.remove("open")));

// ---------- FAQ accordion ----------
document.querySelectorAll(".faq-item").forEach((item) => {
  const answer = item.querySelector(".faq-a");
  if (item.classList.contains("open")) answer.style.maxHeight = answer.scrollHeight + "px";
  item.querySelector(".faq-q").addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((other) => {
      other.classList.remove("open");
      other.querySelector(".faq-a").style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
