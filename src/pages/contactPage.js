import pImg from "./images/rockprofile.jpeg";

function contactPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";
  const headLine = document.createElement("div");
  headLine.innerHTML = "Contact";
  headLine.classList.add("header");

  const phone = document.createElement("div");
  phone.innerHTML = "+02 999 999";
  phone.classList.add("phoneNumber");

  const detailContent = document.createElement("div");
  detailContent.classList.add("contactDetails");
  const name = document.createElement("div");
  const profileImg = document.createElement("img");

  name.textContent = "John Rockweller";
  profileImg.src = pImg;
  detailContent.appendChild(name);
  detailContent.appendChild(profileImg);

  contentDiv.appendChild(headLine);
  contentDiv.appendChild(detailContent);
  contentDiv.appendChild(phone);
}

export default contactPage;
