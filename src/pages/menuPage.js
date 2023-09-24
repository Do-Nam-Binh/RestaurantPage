import ap1 from "./images/slateSliders.png";
import ap2 from "./images/MedleySalad.jpeg";
import mn1 from "./images/GraniteGrilledSalmon.jpeg";
import mn2 from "./images/bakedChicken.jpeg";
import dst1 from "./images/CremeBrulee.jpeg";
import dst2 from "./images/chocolateFondue.jpeg";

function menuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  const headLine = document.createElement("div");
  headLine.innerHTML = "Menu";
  headLine.classList.add("header");

  const appetizers = document.createElement("div");
  appetizers.innerHTML = "Appetizers";
  appetizers.classList.add("subHeader");

  const mainCourse = appetizers.cloneNode(true);
  mainCourse.innerHTML = "Main Course";

  const desserts = appetizers.cloneNode(true);
  desserts.innerHTML = "Desserts";

  //Appetizers
  const appetizers1 = document.createElement("div");
  appetizers1.classList.add("menuItem");
  appetizers1.textContent = "Slate Sliders";

  const appetizers2 = appetizers1.cloneNode(true);
  appetizers2.textContent = "Marble Medley Salad";

  //Main Course
  const mainCourse1 = appetizers1.cloneNode(true);
  mainCourse1.textContent = "Granite-Grilled Salmon";

  const mainCourse2 = appetizers1.cloneNode(true);
  mainCourse2.textContent = "Basalt-Baked Chicken";

  //Desserts
  const dessert1 = appetizers1.cloneNode(true);
  dessert1.textContent = "Quartz Creme Brulee";

  const dessert2 = appetizers1.cloneNode(true);
  dessert2.textContent = "Lava Chocolate Fondue";

  //Images
  const imgAP1 = document.createElement("img");
  imgAP1.classList.add("menuImg");
  imgAP1.src = ap1;

  const imgAP2 = imgAP1.cloneNode(true);
  imgAP2.src = ap2;

  const mainImg1 = imgAP1.cloneNode(true);
  mainImg1.src = mn1;
  const mainImg2 = imgAP1.cloneNode(true);
  mainImg2.src = mn2;

  const dessertImg1 = imgAP1.cloneNode(true);
  dessertImg1.src = dst1;
  const dessertImg2 = imgAP1.cloneNode(true);
  dessertImg2.src = dst2;

  contentDiv.appendChild(headLine);

  contentDiv.appendChild(appetizers);
  contentDiv.appendChild(appetizers1);
  contentDiv.appendChild(imgAP1);
  contentDiv.appendChild(appetizers2);
  contentDiv.appendChild(imgAP2);

  contentDiv.appendChild(mainCourse);
  contentDiv.appendChild(mainCourse1);
  contentDiv.appendChild(mainImg1);
  contentDiv.appendChild(mainCourse2);
  contentDiv.appendChild(mainImg2);

  contentDiv.appendChild(desserts);
  contentDiv.appendChild(dessert1);
  contentDiv.appendChild(dessertImg1);
  contentDiv.appendChild(dessert2);
  contentDiv.appendChild(dessertImg2);
}

export default menuPage;
