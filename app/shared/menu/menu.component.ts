import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

    constructor(
        private route: ActivatedRoute) { }

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
