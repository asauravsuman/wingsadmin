import { Component, HostBinding } from '@angular/core';
import { User } from '../../_models/index';
@Component({
    moduleId: module.id,
    selector: 'header-cmp',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{
	currentUser: User;
    
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

}
