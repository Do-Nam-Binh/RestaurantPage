function contactPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  const headLine = document.createElement("div");
  headLine.innerHTML = "Contact";

  const description = document.createElement("div");
  description.innerHTML = "+02 999 999";

  contentDiv.appendChild(headLine);
  contentDiv.appendChild(description);
}

export default contactPage;
