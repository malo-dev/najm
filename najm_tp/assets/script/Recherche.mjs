export default class Recherchers {
    
    // #aFilms = [];

    constructor(domParent,data) {
        this.domParent = domParent;
		this.data = data
    }

    // setFilms(aFilms) {
    //     this.#aFilms = aFilms;
    // }

    // Rechercher(Data) {
    //     // console.log(this.#aFilms);
		
	// 	const array = this.data
	// 	const items = array.filter(function(value){
	// 		return  value === Data
	// 	})
	// 	console.log(items)
    //     let chaineHTML = "";
    //     items.forEach((unFilm)=>{
    //         chaineHTML += ` <article class="carte">
    //                 <header>
    //                     <h2>${unFilm.title} (${unFilm.designation_date})</h2>
    //                     <h3>${unFilm.specific}</h3>
    //                 </header>
    //              <image  src="509203-rue-st-paul.jpg"/>
    //                 <div class="contenu">
    //                     <p>${unFilm.history_source}</p>
    //                     <h3>${unFilm.generic}</h3>
    //                 </div>
    //                 <footer class="action">x, y z</footer>
    //             </article>`;
    //     })

    //     this.domParent.innerHTML = chaineHTML;
        
    // }
	 Rechercher(Data) {
		// console.log(Data)
        let chaineHTML = "";
              let aArt = this.data
              
              aArt.map((value) => {
				
                            if (value.generic === Data ) {
								
                  let array = aArt.filter(function (value) {
            return value.generic === Data
                  })
                                console.log(array)
                 let chaineHTML = "";
        array.forEach((unFilm)=>{
            chaineHTML += ` <article class="carte">
                    <header>
                        <h2>${unFilm.title} (${unFilm.designation_date})</h2>
                        <h3>${unFilm.specific}</h3>
                    </header>
                 <image  src="509203-rue-st-paul.jpg"/>
                    <div class="contenu">
                        <p>${unFilm.history_source}</p>
                        <h3>${unFilm.generic}</h3>
                    </div>
                    <footer class="action">x, y z</footer>
                </article>`;
        })
                     
			
			
		this.domParent.innerHTML = chaineHTML;
              } else {
                //   console.log('aucune valeur disposnible')
              }
                })
	 }
}