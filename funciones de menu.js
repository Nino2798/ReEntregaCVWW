const iconodemenu= document.querySelector(".iconodemenu");
const menu= document.querySelector(".menudenavegacion");
console.log(menu)
console.log(iconodemenu)

iconodemenu.addEventListener("click",()=>
	{menu.classList.toggle("spread")})

window.addEventListener("click", e=>{
	if (menu.classList.contains("spread")
		 && e.target !=menu && e.target !=iconodemenu    ) {

		menu.classList.toggle("spread")}})
