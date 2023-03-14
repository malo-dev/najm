export default class Affiche {
	domParentModal
	constructor(domParent,domArray) {
		this.domParent = domParent;
		this.domParentModal = domArray
	}
	
	
afficher() {
	let chaineHTML = "";
	const array = this.domParentModal.sort(function (a, b) {
            return a.specific.localeCompare(b.specific, "fr")
        })
	array.forEach(currentItem => {
		chaineHTML += `
	  <div class="post-box tech">
            <img src="./assets/images/im.jpg" alt="" class="post-img">
            <h2 class="category">${currentItem.specific}</h2>
            <a href="#" class="post-title">${currentItem.history}</a>
            <span class="post-date">${currentItem.designation_date}</span>
            <p class="post-description">${currentItem.history_source}</p>
            <div class="profile">
                <img src="./assets/images/img4.jpg" alt="" class="profile-img">
                <span class="profile-name">Nom de la zone : ${currentItem.generic}</span>
            </div>
        </div>
	
		`
		
	})
	
	
	this.domParent.innerHTML = chaineHTML;
}
	afficherAsc() {
		let chaineHTML = "";
		const array = this.domParentModal.sort(function (a, b) {
            return a.generic.localeCompare(b.generic, "fr")
        })
	array.forEach(currentItem => {
		chaineHTML += `
	  <div class="post-box tech">
            <img src="./assets/images/im.jpg" alt="" class="post-img">
            <h2 class="category">${currentItem.specific}</h2>
            <a href="#" class="post-title">${currentItem.history}</a>
            <span class="post-date">${currentItem.designation_date}</span>
            <p class="post-description">${currentItem.history_source}</p>
            <div class="profile">
                <img src="./assets/images/img4.jpg" alt="" class="profile-img">
                <span class="profile-name">Nom de la zone : ${currentItem.generic}</span>
            </div>
        </div>
	
		`
		
	})
	
	
	this.domParent.innerHTML = chaineHTML;
}
	
	afficherDesc() {
		let chaineHTML = "";
		let array = this.domParentModal.sort(function (a,b) {
			return  b-a
		})
	array.forEach(currentItem => {
		chaineHTML += `
	  <div class="post-box tech">
            <img src="./assets/images/im.jpg" alt="" class="post-img">
            <h2 class="category">${currentItem.specific}</h2>
            <a href="#" class="post-title">${currentItem.history}</a>
            <span class="post-date">${currentItem.designation_date}</span>
            <p class="post-description">${currentItem.history_source}</p>
            <div class="profile">
                <img src="./assets/images/img4.jpg" alt="" class="profile-img">
                <span class="profile-name">Nom de la zone : ${currentItem.generic}</span>
            </div>
        </div>
	
		`
		
	})
	
	
	this.domParent.innerHTML = chaineHTML;
}
	
	
}