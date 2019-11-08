import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.sass']
})
export class ShowMessageComponent implements OnInit {

	public menssage: Message = {
		icon_url: '',
		id: '',
		url: '',
		value: ''
	};

	constructor( private _ApiService: ApiService ) { }

	ngOnInit() {
		this._ApiService.getMessage().subscribe(menssage => (this.menssage = menssage));
	}

}
