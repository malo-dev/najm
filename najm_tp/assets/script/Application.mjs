import { artPublicMontreal } from "../data/art_public.js";
import ArtPublic from "./ArtPublic.mjs";
import Filtre from "./Filtre.mjs";

export default class Application {
	#montrealArts;
	#filtre;

	constructor() {
		const domArts = document.querySelector(".arts");

		const domModal = document.querySelector(".modal");

		this.#montrealArts = new ArtPublic(domArts, domModal);

		this.#montrealArts.setArtsPublics(artPublicMontreal);

		this.#montrealArts.afficherMontrealArtsPublics();

		let artFiltre = document.querySelector(".arts");
		let sousButon = document.querySelector(".liste");
		let sousGrille = document.querySelector(".grille")

		artFiltre.addEventListener("click", this.openTheArtModal.bind(this));
		sousButon.addEventListener("click", this.handleClickList.bind(this));
		sousGrille.addEventListener("click", this.handleClickGrille.bind(this));
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
