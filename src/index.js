import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener("click", homePage);
menuBtn.addEventListener("click", menuPage);
contactBtn.addEventListener("click", contactPage);
