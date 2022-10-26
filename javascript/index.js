const inputLink = document.querySelector(".input1");
const shortenBtn = document.querySelector("#shorten-btn");
const link1 = document.querySelector(".link-inicial");
const localStorageKey = localStorage.getItem("link1");
const shortUrlItems = localStorageKey ? JSON.parse(localStorageKey) : [];

for (let index = 0; index < shortUrlItems.length; index++) {
  appenItems(shortUrlItems[index]);
}
const urlsToShow = shortUrlItems;

function appenItems({ name, email }) {
  const linkContainer = document.createElement("div");
  const urlsToShow = shortUrlItems;
  const linkNumber = urlsToShow.length;

  linkContainer.classList.add("link");
  linkContainer.innerHTML = `<span class="link-inicial">${name}</span> <div class="copyHere"><span class="shortenedLink">${email}</span> <button class="copy-btn" id="btn-copy">Copy</button></div>`;

  document.querySelector(".sec-saved-links").appendChild(linkContainer);
}

shortenBtn.addEventListener("click", async () => {
  if (
    !inputLink.value.length ||
    inputLink.value >= 10 ||
    inputLink.value <= 0
  ) {
    alert("Please enter an accepted value");
  } else {
    inputValue = inputLink.value;

    const { name, email } = await fetchUsers(inputValue);
    const storageItem = {
      name,
      email,
    };

    shortUrlItems.push(storageItem);
    appenItems(storageItem);
    localStorage.setItem("link1", JSON.stringify(shortUrlItems));
  }
});

async function fetchUsers(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
}

const linkNumber = urlsToShow.length;
const linkBtn = `.copyBtn${linkNumber}`;
const linkTxt = `.shortenedLink${linkNumber}`;

const seccion = document.querySelector(".sec-saved-links");

seccion.addEventListener("click", (event) => {
  const elementTarget = event.target.parentNode.firstChild.textContent;
  console.log(elementTarget, "prueba");
  navigator.clipboard.writeText(elementTarget);
});

const menuMobile = document.querySelector(".menu-icon");
const menuMobileCls = document.querySelector(".menu-close");
const menu = document.querySelector(".menu-mobile");
const img = document.querySelector("#imagen123");

function mostrar() {
  const img = (document.querySelector("#imagen123").style.display = "none");

  const menu = (document.querySelector(".menu-mobile").style.display = "flex");
}

function ocultar() {
  const img = (document.querySelector("#imagen123").style.display = "flex");

  const menu = (document.querySelector(".menu-mobile").style.display = "none");
}

menuMobile.addEventListener("click", () => {
  console.log("Hola");
  mostrar();

  const menuMobileCls = document.querySelector(".menu-close");
  menuMobileCls.addEventListener("click", () => {
    ocultar();
  });
});

const seccionBtn = document.querySelector(".sec-saved-links");

seccionBtn.addEventListener("click", (event) => {
  const btnTarget = event.target;
  btnTarget.classList.add("copied");
  document.querySelector(".copied").style.background = "hsl(257, 27%, 26%)";
  document.querySelector(".copied").textContent = "Copied!";
});
