import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'employee.component.html'
})

export class EmployeeComponent implements OnInit {
    currentUser: any = {};
    users: User[] = [];
    loading = false;

    public data: any = [];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor( private alertService: AlertService, private userService: UserService,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadUsers();
        // this.alertService.success('Loading .. ');
        // this.loading = true;
    }
    private loadUsers() {
        this.userService.getAll().subscribe((users) => { this.data = users.user;});
    }
}