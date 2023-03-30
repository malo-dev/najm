import MaireFetch from "./MaireFetch.mjs";

export default class Application {
  #Data
  constructor() {
    this.app = new MaireFetch()
    this.app.ListeMaire()
    document.querySelector('.one').addEventListener('click', this.pageone.bind(this))
    document.querySelector('.t').addEventListener('click', this.pagetwo.bind(this))
     document.querySelector('.user').addEventListener('click', this.user.bind(this))
    document.querySelector('.unknown').addEventListener('click',this.unknown.bind(this))
    document.querySelector('.ones').addEventListener('click',this.hn.bind(this))
  }
  async user() {
    window.location.href = "#/user"
   this.app.ListeMaire()
  }
    async unknown() {
    window.location.href = "#/unknown"
   this.app.Uknonw()
  }
 
  async pageone() {
    window.location.href = "#/page=1"
    this.app.ListeMairePages(1)
  }
    async pagetwo() {
    window.location.href = "#/page=2"
    this.app.ListeMairePages(2)
  }
   async hn() {
    window.location.href = "#/page=2"
    this.app.ListeMairePages(2)
  }

}