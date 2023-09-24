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

  const mainCourse1 = appetizers1.cloneNode(true);
  mainCourse1.textContent = "Granite-Grilled Salmon";

  const mainCourse2 = appetizers1.cloneNode(true);
  mainCourse2.textContent = "Basalt-Baked Chicken";

  const dessert1 = appetizers1.cloneNode(true);
  dessert1.textContent = "Quartz Creme Brulee";

  const dessert2 = appetizers1.cloneNode(true);
  mainCourse2.textContent = "Lava Chocolate Fondue";

  contentDiv.appendChild(headLine);

  contentDiv.appendChild(appetizers);
  contentDiv.appendChild(appetizers1);
  contentDiv.appendChild(appetizers2);

  contentDiv.appendChild(mainCourse);
  contentDiv.appendChild(mainCourse1);
  contentDiv.appendChild(mainCourse2);

  contentDiv.appendChild(desserts);
  contentDiv.appendChild(dessert1);
  contentDiv.appendChild(dessert2);
}

export default menuPage;
