//  var menuLinks = [
//    { text: 'about', href: '/about' },
//    { text: 'catalog', href: '/catalog' },
//    { text: 'orders', href: '/orders' },
//    { text: 'account', href: '/account' },
//  ];
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];




const mainEl = document.getElementById("main");
mainEl.style.backgroundColor = "var(--main-bg)";
const header = document.createElement("h1");
header.innerHTML = "DOM Manipulation";
mainEl.append(header);
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");


for (let i =0;i <menuLinks.length;i++){
let link = document.createElement("a")
link.setAttribute("href", menuLinks[i].href);
link.textContent=menuLinks[i].text;
topMenuEl.append(link)

// for (let i =0;i <topMenuEl.length;i++){
// let topMenuEl = document.clickElement("a")
// return }

}



