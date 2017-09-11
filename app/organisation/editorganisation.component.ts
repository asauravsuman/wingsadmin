import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, OrganisationService } from '../_services/index';
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: 'editorganisation.component.html'
})

export class EditorganisationComponent implements OnInit {
    currentUser: any = {};
    loading = false; 

    public data: any = [];

    constructor(private http: Http, private organisationService: OrganisationService, private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
       // this.loadAllOrganisation();
        // this.alertService.success('Loading .. ');     
    }

 

}