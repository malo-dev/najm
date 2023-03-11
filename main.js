import { mairesMTL }  from "./mairesdata.js";
class Maire{
	constructor(tableGroupDivider, tdline, tdrow,data) {
		this.tableGroupDivider = tableGroupDivider;
		this.tdline = tdline;
		this.tdrow = tdrow;
		this.data = data;
	}
	items=""
	getNombreMaires() {
		const array= this.data.sort().reverse()
		for (let index = 0; index < array.length; index++) {
			this.tableGroupDivider.innerHTML += `
			<tr>
      <th class="tdrow" scope="row">${index}</th>
      <td class="tdline">${array.sort()[index].nom}</td>
      <td class="tdprenom">${array[index].prenom}</td>
      <td class="tdDebut">${array[index].debut}</td>
	  <td class="tdfin">${array[index].fin}</</td>
    </tr>`
		}
		
	}
	rechercheMaires() {
		this.tdrow.addEventListener("click", function (e) {
			e.preventDefault()
			// this.items = e.target.value
			this.tdline.addEventListener("change", function (e) {
				this.items = e.target.value
				this.data.find(function (value, index, array) {
					if (value === this.items) {
						const array= value.sort()
		for (let index = 0; index < array.length; index++) {
			this.tableGroupDivider.innerHTML += `
			<tr>
      			<th class="tdrow" scope="row">${index}</th>
      			<td class="tdline">${array.sort()[index].nom}</td>
      			<td class="tdprenom">${array[index].prenom}</td>
      			<td class="tdDebut">${array[index].debut}</td>
	  			<td class="tdfin">${array[index].fin}</</td>
	   		</tr>`
		}
					}
				})
		})
		})

		
		
	}
	
}

class Application extends Maire {
	constructor(tableGroupDivider,tdline, tdrow,data,tdprenom,tdDebut,tdfin) {
		super(tableGroupDivider, tdline, tdrow, data);
		this.tableGroupDivider = tableGroupDivider;
		this.tdline = tdline;
		this.tdrow = tdrow;
		this.data = data;
		this.tdprenom = tdprenom;
		this.tdDebut = tdDebut;
		this.tdfin = tdfin;
	}
	tableGroupDivider = document.querySelector('.table-group-divider')
	tdline = document.querySelector('.tdline')

}
const app = new Application(document.querySelector('.tableGroupDivider'), document.querySelector('.search'), document.querySelector('.btn'), mairesMTL);
app.getNombreMaires()

