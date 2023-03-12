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
                <ul>
               
                </ul>
                </li>
            </ul>
            `;
        });
        
        
        

        this.domParent.innerHTML = chaineHTML;
        console.log(this.domParent)
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
                  <header class="container">
               
                   
                        <p >Titre :  <span >${aPublicArt.Titre}</span></p>
                        <p >Nom de collection :  <span >${aPublicArt.NomCollection}</span></p>
                        <p >Categorie Object :  <span >${aPublicArt.CategorieObjet}</span></p>
                        <p >Sous categorie object : <span >${aPublicArt.SousCategorieObjet}</span></p>
                        <p >Matériaux :  <span >${aPublicArt.Materiaux}</span></p>
                        <p >Technique : <span >${aPublicArt.Technique}</span></p>
                        <p >Parc :  <span >${aPublicArt.Parc}</span></p>
                        <p >CoordonneeLatitude  : <span >${aPublicArt.CoordonneeLatitude}</span></p>
                        <p >CoordonneeLongitude : <span >${aPublicArt.CoordonneeLongitude}</span> </p>  
            </header>
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
                <div class="container">
               
                   
                        <p >Titre :  <span >${aPublicArt.Titre}</span></p>
                        <p >Nom de collection :  <span >${aPublicArt.NomCollection}</span></p>
                        <p >Categorie Object :  <span >${aPublicArt.CategorieObjet}</span></p>
                        <p >Sous categorie object : <span >${aPublicArt.SousCategorieObjet}</span></p>
                        <p >Matériaux :  <span >${aPublicArt.Materiaux}</span></p>
                        <p >Technique : <span >${aPublicArt.Technique}</span></p>
                        <p >Parc :  <span >${aPublicArt.Parc}</span></p>
                        <p >CoordonneeLatitude  : <span >${aPublicArt.CoordonneeLatitude}</span></p>
                        <p >CoordonneeLongitude : <span >${aPublicArt.CoordonneeLongitude}</span> </p>  
            </div>
                `;
			}
		});
		this.domParent.innerHTML = this.domParent.innerHTML + chaineHTML;
	}
}
