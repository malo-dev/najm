export default class ArtPublic {
	#aArtsPublics = [];
	detailTable = "";

	constructor(domParent, domParentModal) {
		this.domParent = domParent;
		this.domParentModal = domParentModal;
	}

	setArtsPublics(aArtsPublics) {
		this.#aArtsPublics = aArtsPublics;
    }
    
    // ici va la recherche
    	  rechercherMontrealArtsPublics(data) {
        let chaineHTML = "";
              let aArt = this.#aArtsPublics 
            //   console.log(aArt.Titre)
              aArt.map((value) => {
                            if (value.Titre === data || value.Artistes[0].Nom=== data || value.Artistes[0].Prenom===data) {
                  const array = aArt.filter(function (value) {
            return value.Artistes[0].NoInterne === 960
                  })
                  console.log(array)
                  array.forEach((aPublicArt) => {
			chaineHTML += `
            <ul id="artsGrid" >
                <li><button id="${aPublicArt.NoInterne}" value="${aPublicArt.NoInterne}">${aPublicArt.Titre}
                </button>
                </li>
            </ul>
            ` });
                            
		this.domParent.innerHTML = chaineHTML;
              } else {
                  console.log('aucune valeur disposnible')
              }
                })
        
        
        
        
        
        
        
    }
    	
    // ici nous mettons ascendant 
    	afficherMontrealArtsPublicsAscendant() {
        let chaineHTML = "";
        
		this.#aArtsPublics.sort((a,b) => {
            return a-b
        }).reverse().forEach((aPublicArt) => {
			chaineHTML += `
            <ul id="artsGrid">
                <li><button id="${aPublicArt.NoInterne}" value="${aPublicArt.NoInterne}">${aPublicArt.NoInterne}
                </button></li>
            </ul>`;
		});

		this.domParent.innerHTML = chaineHTML;
    }
    //  ici nous filtrons les éléments
    
    
           
    afficherMontrealArtsPublicsFilter() {
        let chaineHTML = "";
        let aArt = this.#aArtsPublics 
        const array = aArt.filter(function (value) {
            return value.Artistes[0].NoInterne === 960
        })
        
        console.log(array)
        
        
        
        array.forEach((aPublicArt) => {
			chaineHTML += `
            <ul id="artsGrid">
                <li><button id="${aPublicArt.NoInterne}" value="${aPublicArt.NoInterne}">${aPublicArt.Titre}
                </button>
                </li>
            </ul>
            `;
		});

		this.domParent.innerHTML = chaineHTML;
    }
    
    //  afficher mont descendant
    	afficherMontrealArtsPublicsDescendant() {
        let chaineHTML = "";
          
		  this.#aArtsPublics.sort((a,b) => {
            return b-a
        }).reverse().forEach((aPublicArt) => {
			chaineHTML += `
            <ul id="artsGrid">
                <li><button id="${aPublicArt.NoInterne}" value="${aPublicArt.NoInterne}">${aPublicArt.NoInterne}
                </button></li>
            </ul>`;
		});

		this.domParent.innerHTML = chaineHTML;
    }
    
   
    
    
    
    afficherMontrealArtsPublicsTitre() {
        let chaineHTML = "";
        let aArt = this.#aArtsPublics
		const array = aArt.sort(function (a,b){
            return a.Titre.localeCompare(b.Titre, "fr")
        })
        
        
        
        array.forEach((aPublicArt) => {
			chaineHTML += `
            <ul id="artsGrid">
                <li><button id="${aPublicArt.NoInterne}" value="${aPublicArt.NoInterne}">${aPublicArt.Titre}
                </button>
                </li>
            </ul>
            `;
		});

		this.domParent.innerHTML = chaineHTML;
    }
    
    
        
    afficherMontrealArtsPublicsTitreDesc() {
        let chaineHTML = "";
        let aArt = this.#aArtsPublics
		const array = aArt.sort(function (a,b){
            return b.Titre.localeCompare(a.Titre, "fr")
        })
        
        
        
        array.forEach((aPublicArt) => {
			chaineHTML += `
            <ul id="artsGrid">
                <li><button id="${aPublicArt.NoInterne}" value="${aPublicArt.NoInterne}">${aPublicArt.Titre}
                </button>
                </li>
            </ul>
            `;
		});

		this.domParent.innerHTML = chaineHTML;
    }
    
    
    

	afficherMontrealArtsPublics() {
        let chaineHTML = "";
        // let aArt = this.#aArtsPublics
		this.#aArtsPublics.sort(function (a,b){
            return b-a
        }).forEach((aPublicArt) => {
			chaineHTML += `
            <ul id="artsGrid>
                <li><button id="${aPublicArt.NoInterne}" value="${aPublicArt.NoInterne}">${aPublicArt.NoInterne}
                </button>
                </li>
            </ul>
            `;
		});

		this.domParent.innerHTML = chaineHTML;
    }
    
    afficherMontrealArtsPublicsListe() {
		let chaineHTML = "";
		this.#aArtsPublics.forEach((aPublicArt) => {
			chaineHTML += `
            <div id="artsGrid">
                <button id="${aPublicArt.NoInterne}" value="${aPublicArt.NoInterne}">${aPublicArt.NoInterne}
                </button>
            </div>`;
		});

		this.domParent.innerHTML = chaineHTML;
	}

	openTheArtModal(artInternNumber) {
		let chaineHTML = "";
		const selectedArt = this.#aArtsPublics.forEach((aPublicArt) => {
			if (aPublicArt.NoInterne == artInternNumber) {
				chaineHTML += `
                <table border="1">
                <thead>
                    <tr>
                        <th colspan="2">Titre</th>
                        <th colspan="2">Nom de collection</th>
                        <th colspan="2">Categorie Object</th>
                        <th colspan="2">Sous categorie object</th>
                        <th colspan="2">Matériaux</th>
                        <th colspan="2">Technique</th>
                        <th colspan="2">Parc</th>
                        <th colspan="2">CoordonneeLatitude</th>
                        <th colspan="2">CoordonneeLongitude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2">${aPublicArt.Titre}</td>
                        <td colspan="2">${aPublicArt.NomCollection}</td>
                        <td colspan="2">${aPublicArt.CategorieObjet}</td>
                        <td colspan="2">${aPublicArt.SousCategorieObjet}</td>
                        <td colspan="2">${aPublicArt.Materiaux}</td>
                        <td colspan="2">${aPublicArt.Technique}</td>
                        <td colspan="2">${aPublicArt.Parc}</td>
                        <td colspan="2">${aPublicArt.CoordonneeLatitude}</td>
                        <td colspan="2">${aPublicArt.CoordonneeLongitude}</td>    
                    </tr>
                </tbody>
            </table>
                `;
			}
		});

		this.domParentModal.innerHTML = chaineHTML;
	}

	filterOnParamsV2(categorieObjetFilter, sousCategorieObjet) {
		let chaineHTML = "";

		this.#aArtsPublics.forEach((aPublicArt) => {
			if (
				aPublicArt.CategorieObjet == categorieObjetFilter &&
				aPublicArt.sousCategorieObjet == sousCategorieObjet
			) {
				chaineHTML += `
                <table border="1">
                <thead>
                    <tr>
                        <th colspan="2">Titre</th>
                        <th colspan="2">Nom de collection</th>
                        <th colspan="2">Categorie Object</th>
                        <th colspan="2">Sous categorie object</th>
                        <th colspan="2">Matériaux</th>
                        <th colspan="2">Technique</th>
                        <th colspan="2">Parc</th>
                        <th colspan="2">CoordonneeLatitude</th>
                        <th colspan="2">CoordonneeLongitude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2">${aPublicArt.Titre}</td>
                        <td colspan="2">${aPublicArt.NomCollection}</td>
                        <td colspan="2">${aPublicArt.CategorieObjet}</td>
                        <td colspan="2">${aPublicArt.SousCategorieObjet}</td>
                        <td colspan="2">${aPublicArt.Materiaux}</td>
                        <td colspan="2">${aPublicArt.Technique}</td>
                        <td colspan="2">${aPublicArt.Parc}</td>
                        <td colspan="2">${aPublicArt.CoordonneeLatitude}</td>
                        <td colspan="2">${aPublicArt.CoordonneeLongitude}</td>    
                    </tr>
                </tbody>
            </table>
                `;
			}
		});
		this.domParent.innerHTML = this.domParent.innerHTML + chaineHTML;
	}
}
