function menuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  const headLine = document.createElement("div");
  headLine.innerHTML = "Menu";

  const description = document.createElement("div");
  description.innerHTML = "Menu items";

  contentDiv.appendChild(headLine);
  contentDiv.appendChild(description);
}

export default menuPage;
