function menuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  const headLine = document.createElement("div");
  headLine.innerHTML = "Menu";
  headLine.classList.add("header");

  const appetizers = document.createElement("div");
  appetizers.innerHTML = "Appetizers";
  appetizers.classList.add("subHeader");

  const mainCourse = document.createElement("div");
  mainCourse.innerHTML = "Main Course";
  mainCourse.classList.add("subHeader");

  const desserts = document.createElement("div");
  desserts.innerHTML = "Desserts";
  desserts.classList.add("subHeader");

  contentDiv.appendChild(headLine);
  contentDiv.appendChild(appetizers);
  contentDiv.appendChild(mainCourse);
  contentDiv.appendChild(desserts);
}

export default menuPage;
