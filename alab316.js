

const mainEl = document.getElementById("main");
mainEl.style.backgroundColor = "var(--main-bg)";
const header = document.createElement("h1");
header.innerHTML = "DOM Manipulation";
mainEl.append(header);
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var( --top-menu-bg)";
topMenuEl.classList.add("flex_around");

// console.log(topMenuEl);


const menuLists = document.getElementsById("Link");
var menuLinks = [
topMenuEl { text: 'about', href: '/about '},
topMenuEl { text: 'catalog', href: '/catalog'},
topMenuEl { text: 'orders', href: '/orders' },
topMenuEl { text: 'account', href: '/account' },
];
