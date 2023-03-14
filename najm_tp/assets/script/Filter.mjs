export default class Filter {
	val
	domParentModal
	constructor(domParent,domArray) {
		this.domParent = domParent;
		this.domParentModal = domArray
	}
	
	FilterData(){
	let chaineHTML = "";
	this.domParentModal.forEach(currentItem => {
		chaineHTML += `
		        
	<span class="filter-item" data-filter="tech">${currentItem.generic}</span>`
		
	})
	
	
	this.domParent.innerHTML = chaineHTML;
}
	
	FilterAfficheData(data) {
		{
			let chaineHTML = "";
			
			const items = this.domParentModal.filter((value) => {
				this.val = {...value}
				return this.val.generic === `${data}` || this.val.specific === `${data}` || this.val.designation_date === `${data}`
			})   
			
			
	items.forEach(currentItem => {
		chaineHTML += `
	  <div class="post-box ">
            <img src="./assets/images/im.jpg" alt="" class="post-img">
            <h2 class="category">${currentItem.specific}</h2>
            <a href="#" class="post-title">${currentItem.history}</a>
            <span class="post-date">${currentItem.designation_date}</span>
            <p class="post-description">${currentItem.history_source}</p>
            <div class="profile">
                <img src="./assets/images/img4.jpg" alt="" class="profile-img">
                <span class="profile-name">Type de zone : ${currentItem.generic}</span>
            </div>
        </div>
	
		`
		
	})
	
	
	this.domParent.innerHTML = chaineHTML;
}
	}
}