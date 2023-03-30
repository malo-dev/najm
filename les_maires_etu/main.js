import Application from "./src/Application.mjs";

(function(){

	window.addEventListener("load", () => {
		
		const app = new Application();
		window.location.href("#/")
    });
})()
