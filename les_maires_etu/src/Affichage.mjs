export default class Affichage{
	constructor() {
			
	}
	async afficher(data) {
		  console.log(data)
    let text = " "
    data.data.forEach(currentItem => {
      text += `
       <div class="article">
      <div class="left">
        <img src=${currentItem.avatar} alt="">
      </div>
      <div class="right">
        <p class="date">Juillet, 24, 2020</p>
        <h1>il s'agit de ${currentItem.first_name}</h1>
        <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cupiditate repellendus dolor necessitatibus. Modi, quos! Explicabo voluptates vero ullam quis ipsum impedit illum numquam cum quaerat animi? Ad, fugiat neque.</p>
        <p class="auteur">Voila son email : ${currentItem.email}</p>
      </div>
    </div> ` 
    })
    
    document.querySelector('.articles').innerHTML = text
	}
	
	
	
	async afficherUknown(data) {
		  console.log(data)
    let text = " "
    data.data.forEach(currentItem => {
      text += `
       <div class="article">
      <div class="left">
        <img src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg" alt="">
      </div>
      <div class="right">
        <p class="date">{currentItem.pantone_value}</p>
        <h1>il s'agit de ${currentItem.name}</h1>
        <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cupiditate repellendus dolor necessitatibus. Modi, quos! Explicabo voluptates vero ullam quis ipsum impedit illum numquam cum quaerat animi? Ad, fugiat neque.</p>
        <p class="auteur">publié en  : ${currentItem.year}</p>
      </div>
    </div> ` 
    })
    
    document.querySelector('.articles').innerHTML = text
  }
}