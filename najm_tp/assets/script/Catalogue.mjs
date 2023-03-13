export default class Catalogue {
    
    #aFilms = [];

    constructor(domParent) {
        this.domParent = domParent;
    }

    setFilms(aFilms) {
        this.#aFilms = aFilms;
    }

    afficher() {
        console.log(this.#aFilms);
        let chaineHTML = "";
        this.#aFilms.forEach((unFilm)=>{
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
        console.log(this.domParent)
        
    }

}