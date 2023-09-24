import homePage from "./pages/homePage";
import menuPage from "./pages/menuPage";
import contactPage from "./pages/contactPage";
import "./style.css";

homePage();

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener("click", homePage);
menuBtn.addEventListener("click", menuPage);
contactBtn.addEventListener("click", contactPage);
