import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'editemployee.component.html'
})

export class EditemployeeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;

 model: any = {firstname: '', lastname: '',email:'',phone:''};
    constructor( private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
    }
    saveEmployee(){
        
    }
}