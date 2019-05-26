import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
	@Input() appList;
	@Output() deleteEvent = new EventEmitter();
	@Output() updateEvent = new EventEmitter();

	public handleDelete(theApt:object) {
		this.deleteEvent.emit(theApt);
	}

	public handleUpdate(theApt: object, labelName: string, newValue: string) {
		this.updateEvent.emit({
			theApt: 		theApt,
			labelName: 	labelName,
			newValue: 	newValue
		});
	}
}
