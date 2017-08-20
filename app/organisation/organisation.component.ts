import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, UserService, OrganisationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'organisation.component.html'
})

export class OrganisationComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;

    constructor(private userService: UserService , private organisationService: OrganisationService, private alertService: AlertService) {
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
        this.organisationService.getAll().subscribe((users) => { this.users = users.organisation;});
    }
}