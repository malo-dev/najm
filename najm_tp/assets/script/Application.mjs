import Affiche from "./Affiche.mjs";
import { dataGhibli } from '../data/film.js'
import Rechercher from "./rechercher.mjs";
import Filter from "./Filter.mjs";

export default class Application {
	#val;
	#affiche;
	#recherche;
	#filter;
	constructor() {
		
		let handlesearch = document.querySelector('.in')
		let handleClickBtn = document.querySelector('.login')
		this.#affiche = new Affiche(document.querySelector('.post'), dataGhibli)
		this.#recherche = new Rechercher(document.querySelector('.post'),dataGhibli)
		this.#affiche.afficher()
				this.#filter= new Filter(document.querySelector('.post'),dataGhibli)
		
		handleClickBtn.addEventListener("click", this.handleClick.bind(this));
		handlesearch.addEventListener("change", this.handleChange.bind(this));
		
		// this.#filter.FilterData()
		document.querySelector('.order').addEventListener("click", this.handleClickAsc.bind(this));
				document.querySelector('.orders').addEventListener("click", this.handleClickDesc.bind(this));
		// filter button vont ici
		
				document.querySelector('.active-filter').addEventListener("click", this.handleClickactive.bind(this));
		document.querySelector('.avenue').addEventListener("click", this.handleavenue.bind(this));
				document.querySelector('.parc').addEventListener("click", this.handleparc.bind(this));
		document.querySelector('.rue').addEventListener("click", this.handlerue.bind(this));
				document.querySelector('.square').addEventListener("click", this.handleSquare.bind(this));
		

// window.addEventListener("scroll", () => {
//     header.classList.toggle("shadow", window.scrollY > 0)
// })
		
		// filter function
		

	}
	
	handleClickDesc() {
		this.#affiche.afficher()
	}
	handleClickAsc() {
		this.#affiche.afficherAsc()
	}
	
	handleChange(evt) {
		this.#val = evt.target.value
	}
	handleClickactive() {
			
			this.#affiche.afficher()
	}
	handleavenue() {
		this.#filter.FilterAfficheData("avenue")
	}
	handleparc() {
		
		this.#filter.FilterAfficheData("parc")
	}
	handlerue() {
		this.#filter.FilterAfficheData("rue")
	}
	handleSquare() {
		
		this.#filter.FilterAfficheData("square")
	}
	
	
	
	handleClick(ev) {
		ev.preventDefault()
		console.log(this.#val)
		this.#recherche.rechercher(this.#val)
	}

}