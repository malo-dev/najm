import Maire from "./Maire.mjs";
import { mairesMTL } from "./mairesdata.js";

export default class Application {
	/**
	 * Constructeur de la classe Application
	 * Le constructeur attache les écouteurs d'événement sur les bonnes méthodes de l'application
	 * Il instancie l'objet Maire.
	 */
	constructor() {
		console.log(mairesMTL);
		this.maire = new Maire(mairesMTL);
		document
			.querySelector(".btn-liste-nom")
			.addEventListener("click", this.listeNom.bind(this));
		document
			.querySelector(".btn-liste-date")
			.addEventListener("click", this.listeDate.bind(this));
		document
			.querySelector(".btn-recherche-nom")
			.addEventListener("click", this.rechercheNom.bind(this));
		document
			.querySelector(".btn-recherche-date")
			.addEventListener("click", this.rechercheDate.bind(this));
	}

	listeNom() {
		let elementOrdre = document.querySelector("[name='ordre']:checked");
		let ordre = "ASC";
		if (elementOrdre) {
			ordre = elementOrdre.value;
		}
		console.log(ordre);
		console.log("listeNom");
		let param = {
			type: "nom",
			ordre: ordre,
		};

		let aRes = this.maire.listeMaires(param);
		console.log(aRes);
		this.afficher(aRes);
	}

	listeDate() {
		let elementOrdre = document.querySelector("[name='ordre']:checked");
		let ordre = "ASC";
		if (elementOrdre) {
			ordre = elementOrdre.value;
		}
		console.log("listeDate");
		let param = {
			type: "date",
			ordre: ordre,
		};

		let aRes = this.maire.listeMaires(param);
		console.log(aRes);
		this.afficher(aRes);
	}

	rechercheNom() {
		console.log("rechercheNom");
		let valeurRecherche = document.querySelector(".champ-recherche").value;
		let param = {
			type: "nom",
			valeur: valeurRecherche.trim(),
		};

		let aRes = this.maire.rechercheMaires(param);
		console.log(aRes);
		this.afficher(aRes);
	}

	rechercheDate() {
		console.log("rechercheDate");
		let valeurRecherche = document.querySelector(".champ-recherche").value;
		let param = {
			type: "date",
			valeur: valeurRecherche.trim(),
		};

		let aRes = this.maire.rechercheMaires(param);
		console.log(aRes);
		this.afficher(aRes);
	}

	afficher(data) {
		console.log(data);
		let chaineHTML = "";
		if (data.length > 0) {
			data.forEach(function (maire) {
				chaineHTML += `<tr>
                    <td>${maire.nom}</td><td>${maire.prenom}</td><td>${maire.debut}</td><td>${maire.fin}</td>
                    </tr>`;
			});
		} else {
			chaineHTML = `<tr><td colspan='4'>Aucun résultats</td></tr>`;
		}

		document.querySelector("table tbody").innerHTML = chaineHTML;
	}
	/**
    Mettre les autres méthodes ici.
    */
}
