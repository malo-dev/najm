import Affichage from "./Affichage.mjs";
export default class MaireFetch {
	#Data;
	constructor() {
		this.app = new Affichage()
	}
	
 async ListeMaire() {
      this.data = await fetch('https://reqres.in/api/users')
      this.dat = await this.data.json()
      return this.app.afficher(this.dat)
	}
async ListeMairePages(number) {
      this.data = await fetch(`https://reqres.in/api/users?page=${number}`)
      this.dat = await this.data.json()
      return this.app.afficher(this.dat)
	}
	
	async Uknonw() {
		this.data = await fetch(`https://reqres.in/api/unknown`)
      this.dat = await this.data.json()
      return this.app.afficherUknown(this.dat)
	}

}
