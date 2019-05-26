import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor() { }

	@Output() queryEvt = new EventEmitter<string>();
	@Output() sortEvt = new EventEmitter<string>();
	@Input() orderBy;
	@Input() orderType;

  ngOnInit() {
  }

	handleQuery(query: string) {
		this.queryEvt.emit(query);
	}

	handleSort(sortObj) {
		this.orderBy = sortObj.orderBy;
		this.orderType = sortObj.orderType;
		this.sortEvt.emit(sortObj);
	}
}
