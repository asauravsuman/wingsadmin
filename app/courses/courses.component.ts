import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'courses.component.html'
})

export class CoursesComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;

    constructor( private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
    }
}