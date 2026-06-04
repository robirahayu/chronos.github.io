const menus = [
{
text:"Products",
link:"#products"
},
{
text:"About Us",
link:"about.html"
},
{
text:"How To Buy",
link:"how-to-buy.html"
},
{
text:"Testimonial",
link:"testimonial.html"
}
];

const submenu =
document.getElementById("submenu");

menus.forEach(menu=>{

submenu.innerHTML += `
<li>
<a href="${menu.link}">
${menu.text}
</a>
</li>
`;

});