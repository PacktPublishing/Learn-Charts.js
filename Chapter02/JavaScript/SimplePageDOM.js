const html = document.documentElement;

const body = document.createElement("body");
html.appendChild(body);

const h1 = document.createElement("h1");
const h1Text = document.createTextNode("Simple page");
h1.appendChild(h1Text);
body.appendChild(h1);

const p = document.createElement("p");
const pText = document.createTextNode("Simple paragraph");
p.appendChild(pText);
body.appendChild(p);

const div = document.createElement("div");
const divImg = document.createElement("img");
divImg.setAttribute("src", "../Images/pluto.jpg");
divImg.setAttribute("width", "100");
div.appendChild(divImg);

const divP = document.createElement("p");
const divPText = document.createTextNode("Click me!");
divP.appendChild(divPText);
div.appendChild(divP);

body.appendChild(div);