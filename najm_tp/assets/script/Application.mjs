import { artPublicMontreal } from "../data/art_public.js";
import ArtPublic from "./ArtPublic.mjs";
import Filtre from "./Filtre.mjs";

export default class Application {
	#valeur;
	#montrealArts;
	#filtre;

	constructor() {
		const domArts = document.querySelector(".arts");

		const domModal = document.querySelector(".modal");

		this.#montrealArts = new ArtPublic(domArts, domModal);

		this.#montrealArts.setArtsPublics(artPublicMontreal);

		this.#montrealArts.afficherMontrealArtsPublics();
		this.#montrealArts.afficherMontrealArtsPublicsTitre();
		// this.#montrealArts.afficherMontrealArtsPublicsFilter()
		
		

		let artFiltre = document.querySelector(".arts");
		let sousButon = document.querySelector(".liste");
		let sousGrille = document.querySelector(".grille")
		let rechercheBtn = document.querySelector(".inpu")
		let handleClickBtn = document.querySelector(".btn-rechercher")
		
		
		//  boutons ascendant et descendant
		
		let ascButon = document.querySelector(".asc");
		let descGrille = document.querySelector(".desc")
		

		artFiltre.addEventListener("click", this.openTheArtModal.bind(this));
		sousButon.addEventListener("click", this.handleClickList.bind(this));
		sousGrille.addEventListener("click", this.handleClickGrille.bind(this));
		ascButon.addEventListener("click", this.handleClickListAsc.bind(this));
		descGrille.addEventListener("click", this.handleClickGrilleDesc.bind(this));
		rechercheBtn.addEventListener("change", this.handleChange.bind(this));
		handleClickBtn.addEventListener("click", this.handleClick.bind(this));
	}
// fonction rechercher 
	handleChange(e) {
		this.valeur = e.target.value
	}
	handleClick(e) {
		e.preventDefault()
		this.#montrealArts.rechercherMontrealArtsPublics(this.valeur)
	}
	
	
	// fonction ascendant
	
	handleClickListAsc() {
		
		this.#montrealArts.afficherMontrealArtsPublicsAscendant()
		// this.#montrealArts.affiche()
		this.#montrealArts.afficherMontrealArtsPublicsTitre()
	}
	// fonction descendanrt
	handleClickGrilleDesc() {
		
		this.#montrealArts.afficherMontrealArtsPublicsDescendant()
		this.#montrealArts.afficherMontrealArtsPublicsTitreDesc()
	}
	
	// ici nous mettons la fonction qui change la grille en liste
	
	handleClickList() {
		this.#montrealArts.afficherMontrealArtsPublicsListe()
		// console.log("jsdfjdbs")
	}
	
// ici fonction grille
	handleClickGrille() {
		this.#montrealArts.afficherMontrealArtsPublics()
	}
	
	
	
	
	
	
	appliquerFiltre(evt) {
		let mesFilms;
		if (evt.target.classList.contains("choixFiltre")) {
			console.log(evt.target.dataset);

			const cat = evt.target.dataset.jsCat;
			const valeur = evt.target.dataset.jsCatValeur;
			const eleActif = document.querySelector(
				".filtre [data-js-actif='1']"
			);
			if (eleActif) {
				eleActif.dataset.jsActif = 0;
			}

			if (eleActif == evt.target) {
				console.log("actif");
				mesFilms = artPublicMontreal;
			} else {
				evt.target.dataset.jsActif = 1;
				mesFilms = this.#filtre.appliquerFiltre(
					cat,
					valeur,
					artPublicMontreal
				);
			}
			//const mesFilms = this.#filtre.appliquerFiltre("running_time", "90-100", dataGhibli)

			console.log(mesFilms);
			this.#montrealArts.setArtsPublics(mesFilms);
			this.#montrealArts.afficher();
		}
	}

	openTheArtModal(event) {
		this.#montrealArts.openTheArtModal(event.target.value);
	}
}
