import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'organisation.component.html'
})

export class OrganisationComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;

    constructor(private userService: UserService , private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.alertService.success('Loading .. ');
        // this.loading = true;
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe((users) => { this.users = users.user;});
    }
}