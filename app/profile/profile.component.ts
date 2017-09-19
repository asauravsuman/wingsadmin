import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, OrganisationService } from '../_services/index';
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    currentUser: any = {};
    loading = false;

    public data: any = [];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "email";
    public sortOrder = "asc";
    public activeTab = "profile";
    model: any = {firstname: '', lastname: '',email:'',phone:''};
    constructor(private http: Http, private organisationService: OrganisationService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.email = this.currentUser.email;
    }

    ngOnInit() {
        this.loadAllUsers();
        // this.alertService.success('Loading .. ');     
    }

    private loadAllUsers() {
        this.organisationService.getAll().subscribe((users) => { this.data = users.organisation;});
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
    clickTab(mode:string){
        this.activeTab = mode;
    }
    saveProfile(){

    }
    changePassword(){

    }

}