function homePage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  const headLine = document.createElement("div");
  headLine.innerHTML = "The Stone Plate Cafe";
  headLine.classList.add("header");

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML =
    "Tucked away in a serene corner of nature, The Stone Plate cate is a truly unique culinary destination that celebrates the beauty of simplicity of the natural world. Our restaurant is unlike any other, as we exclusively serve dishes inspired by the raw elegance of Earth's very foundation - rocks. At The Stone Plate Cafe, you'll embark on a gastronomic journey that reconnects you with the fundamental elements of our planet.";

  contentDiv.appendChild(headLine);
  contentDiv.appendChild(description);
}

export default homePage;
