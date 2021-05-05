
const header = document.createElement("header");
header.classList.add("header");
document.body.append(header);

const h1 = document.createElement("h1");
header.classList.add("h1");
h1.textContent = "Mon titre en javascript";
document.body.append(h1);

const p = document.createElement("p");
header.classList.add("p");
p.textContent = "Voici mon premier paragraphe réalisé en JavaScript !";
document.body.append(p);