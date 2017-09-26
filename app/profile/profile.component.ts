import { Component, OnInit } from '@angular/core'; 

import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';
import {Http} from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    currentUser: any = {};
    loading = false;

    public activeTab = "profile";
    model: any = {id:'', first: '', middle: '', last: '',email:'',phone:''};
    modelPassword: any = {password:'', confirmpassword: '', oldpassword: ''};
    constructor(private http: Http, private userService: UserService , private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.id = this.currentUser.id;
        this.model.email = this.currentUser.email;
        this.model.first = this.currentUser.first;
        this.model.middle = this.currentUser.middle;
        this.model.last = this.currentUser.last;
        this.model.image = this.currentUser.image;
        this.model.phone = this.currentUser.phone;
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');     
    }

    clickTab(mode:string){
        this.activeTab = mode;
    }
    saveProfile(){
        this.alertService.success('Updating ...');
        this.userService.update(this.model).subscribe((resUser) => { 
            localStorage.setItem('currentUser', JSON.stringify(resUser.user));
            this.alertService.success('Profile updated successfully.');
        });
    }
    changePassword(){
        this.alertService.success('Updating password ...');
        // this.userService.changepassword(this.modelPassword).subscribe((resUser) => { 
        //     this.alertService.success('Password changed successfully.');
        // });
    }

}