import App from "./App.mjs";

const url = "https://jsonplaceholder.typicode.com/";

window.addEventListener("load", function(){
    
    
    /**** 
     * AJAX : Asynchronous Javascript and XML
     * seconde technique : Fetch
     * */
    /*
    let data = [];
    console.log("fetch")
    fetch(url+"films")
        .then(function(reponse){
            return reponse.json();
        })
        .then(function(donnees){
           data = donnees;
           console.log(donnees)
        });

    fetch(url+"films")
        .then(reponse=>reponse.json())
        .then(donnees=>{
           data = donnees;
           console.log(donnees)
        });

        console.log(data);
    
*/

    

    let donnees = fetchAsync();
    console.log(donnees);
    donnees
        .then(info => console.log(info))
    
})


async function fetchAsync (){
    //console.log("avant")
    let reponse = await fetch(url+"comments");
    //console.log("apres")
    //console.log(reponse);
    let data = await reponse.json();
    //afficher...

    //console.log(data);
    return data;
}