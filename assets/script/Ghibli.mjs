export default class Ghibli{
    //URLGhibli = "https://ghibliapi.herokuapp.com/";
    URLGhibli = "https://jsonplaceholder.typicode.com/";


    /**
     * 
     * @param {function} cb - Fonction de rappel qui prendra les données en paramètre     
     */
    getFilms(cb){
      
       fetch(this.URLGhibli+ "comments")
        .then(data=>data.json())
        .then(data=>{
            cb(data);
        })

    }
    /**
     * 
     * @returns Promesses
     */
    getFilmsPromise(){
        return fetch(this.URLGhibli+ "comments")
            .then(data=>data.json())
        
    }
    /**
     * 
     * @returns array
     */
    async getFilmsAsync(cb){
        let data = await fetch(this.URLGhibli+ "comments");
        data = await data.json();
        if(cb){
            cb(data);
        }
        return data;        
    }

    /**
     * 
     * @param {function} cb - Fonction de rappel
     */
    getFilmsXHR(cb){
       const xhr = new XMLHttpRequest();
       xhr.addEventListener("load", function(){
            const data = JSON.parse(xhr.response);
            cb(data);
            //console.log(xhr.response)
       })
       xhr.open("GET", this.URLGhibli+ "comments");
       xhr.send();
    }

    


}