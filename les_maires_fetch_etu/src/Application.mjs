import MaireXhr from "./MaireXhr.mjs";
import MaireFetch from "./MaireFetch.mjs";

export default class Application {
  #TextHtml
  #searchVal 
    /**
     * Constructeur de la classe Application
     * Le constructeur attache les écouteurs d'événement sur les bonnes méthodes de l'application
     */
  constructor() {
      //  ICI on accede au dom 
    document.querySelector(".fetch .btn-liste-nom").addEventListener("click", () => {
        // ici j'instancie la classe mairefetch exporter d'un autre fichier
      let oFetch = new MaireFetch();
      
        let params = {
                      type:"nom", 
                      ordre : "asc", 
                      callback: function(data){
                        // console.log(this)
                          // console.log(data)
                          this.afficher(data);
                      }.bind(this)};

      oFetch.listeMaires(params);
      oFetch.rechercheMaires(params);

    })
    
    
    // liste pard date quand on clique sur le bouton
      document.querySelector(".fetch .btn-liste-date").addEventListener("click", () => {
        // ici j'instancie la classe mairefetch exporter d'un autre fichier
      let oFetch = new MaireFetch();
      
        let params = {
                      type:"date", 
                      ordre : "asc", 
                      callback: function(data){
                        // console.log(this)
                          // console.log(data)
                          this.afficher(data);
                      }.bind(this)};

      oFetch.listeMaires(params);
      oFetch.rechercheMaires(params);

    })
    
    
    // ici nous recuperons la valeur de l'input recherche
    
     document.querySelector(".fetch .champ-recherche").addEventListener("change", (e) => {
       this.#searchVal = e.target.value

      })
    // ici nous allons rendre le bouton clickable
    document.querySelector(".fetch .btn-recherche-nom").addEventListener("click", () => {
        // ici j'instancie la classe mairefetch exporter d'un autre fichier
      let oFetch = new MaireFetch();
      console.log(this.#searchVal)
        let params = {
                      typeId:this.#searchVal, 
                      ordre : "asc", 
                      callback: function(data){
                        // console.log(this)
                          // console.log(data)
                          this.afficher(data);
                      }.bind(this)};

      // oFetch.listeMaires(params);
      oFetch.rechercheMaires(params);

    })
    
    
  // ici on fait la recherche par date 
      document.querySelector(".fetch .btn-recherche-date").addEventListener("click", () => {
        // ici j'instancie la classe mairefetch exporter d'un autre fichier
      let oFetch = new MaireFetch();
      console.log(this.#searchVal)
        let params = {
                      typeId:this.#searchVal, 
                      ordre : "asc", 
                      callback: function(data){
                        // console.log(this)
                          // console.log(data)
                          this.afficher(data);
                      }.bind(this)};

      // oFetch.listeMaires(params);
      oFetch.rechercheMaires(params);

  })
    
    
    
    
    
    
        
    }
    /**
    Mettre les autres méthodes ici.
    
    */

  //  ici nous affichons les elements
   afficher(data){
     data.forEach(element => {
      console.log(element.body)
      this.#TextHtml += `
      <div>
        <h1> la persone qui commente s'appelle :  ${element.name}    avec comme email :    <span></span>${element.email}<h1>
      
      </div>
      `
    });
     document.querySelector('.affichage-maire').innerHTML = this.#TextHtml
   }
  
  
  
  }