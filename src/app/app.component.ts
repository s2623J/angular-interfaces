import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { without, findIndex } from 'lodash';

library.add(faTimes, faPlus);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public title = 'Wisdom Pet Medicine';
	private theList:object[];
	public modifiedList: object[];
	public orderBy: string;
	public orderType: string;
	public lastIndex:	number;

	constructor(private http:HttpClient) {
		this.orderBy = 'petName';
		this.orderType = 'asc';
	}

  ngOnInit():void {
		this.lastIndex = 0;
		this.http.get<any>('../assets/data.json').subscribe(data => {
			this.theList = data.map((item) => {
				item.aptId = this.lastIndex++;
				return item;
			});
			this.modifiedList = data;
			console.log(this.theList);
		});
  }

	public searchApt(theQuery: string) {
		console.log(theQuery);
		this.modifiedList = this.theList;
		this.modifiedList = this.theList.filter(eachItem => {
			return(
				eachItem['petName'].toLowerCase().includes(theQuery.toLowerCase()) ||
				eachItem['aptDate'].toLowerCase().includes(theQuery.toLowerCase()) ||
				eachItem['ownerName'].toLowerCase().includes(theQuery.toLowerCase())
			);
		});
	}

	public addApt(theApt) {
		theApt.aptId = this.lastIndex++;
		this.theList.unshift(theApt);
		this.modifiedList = this.theList;
		console.log(this.theList);
	}

	public deleteApt(theApt: object) {
		this.modifiedList = without(this.theList, theApt);
		this.theList = this.modifiedList;
	}

	public sortItems(sortEvt) {
		let order: number;
		// Setting Ascending vs. Descending toggle
		if (sortEvt.orderType === 'asc') {
		  order = 1;
		} else {
			order = -1;
		}
		// Ascending sort based on field
		this.modifiedList.sort((a, b) => {
			if (a[sortEvt.orderBy].toLowerCase() < b[sortEvt.orderBy].toLowerCase()) {
			  return -1 * order;
			}
			if (a[sortEvt.orderBy].toLowerCase() > b[sortEvt.orderBy].toLowerCase()) {
			  return 1 * order;
			}
		});
	}

	public updateApt(aptInfo) {
		let aptIndex = aptInfo.theApt.aptId;
		let modifiedIndex = aptInfo.theApt.aptId;

		this.theList[aptIndex][aptInfo.labelName] = aptInfo.newValue;
		this.modifiedList[aptIndex][aptInfo.labelName] = aptInfo.newValue;
	}
}
