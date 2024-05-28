import "./alab316.css";
import styling from "./alab316.css";
console.log(styling);

const mainEl = document.getElementById("main");
mainEl.style.backgroundColor = "var(--main-bg)";
const header = document.createElement("h1");
header.innerHTML = "DOM Manipulation";
mainEl.append(header);
mainEl.classList.add("flex-ctr");
