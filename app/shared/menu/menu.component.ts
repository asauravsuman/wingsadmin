import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../_models/index';
@Component({
    moduleId: module.id,
    selector: 'menu-cmp',
    templateUrl: 'menu.component.html'
})

export class MenuComponent{
    flagActiveDashboard: string;
    flagActiveOrganisation: string;
    flagActiveProfile: string;
    flagActiveSettings: string;
    currentpath: string;
    currentUser: User;

    constructor(
        private route: ActivatedRoute) { 
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
    	this.route.url.subscribe((params: Params) => {
    		if(params.length){
		        this.currentpath =  params[0].path || '/';
		        this.activateMenuClass(this.currentpath);   
    		}else{
    			this.flagActiveDashboard = 'active';
    		}
	    });
    }
    isOrganisationAdmin(){
        if(this.currentUser.role == 'organisationadmin'){
            return true;
        }
        return false;
    }
    isSuperAdmin(){
        if(this.currentUser.role == 'superadmin'){
            return true;
        }
        return false;
    }

    activateMenuClass(urlparam: string) {
    	switch(urlparam){
       		case 'dashboard':
       			this.flagActiveDashboard = 'active';
       		break;
       		case 'organisation':
       			this.flagActiveOrganisation = 'active';
       		break;
       		case 'profile':
             this.flagActiveProfile = 'active';
           break;
           case 'settings':
       			this.flagActiveSettings = 'active';
       		break;
       		default:
       			this.flagActiveDashboard = 'active';
       		break;
       }
    }
}
