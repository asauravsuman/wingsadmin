import { Component, OnInit } from '@angular/core'; 

import { User } from '../_models/index';
import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'addtopictocourse.component.html'
})

export class AddtopictocourseComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;
    public activeTab = 'topic';
    listTopic: any = [];
    topic: any = {topictitle: ''};
    radio: any = {radiotitle: ''};
    dropdown: any = {dropdowntitle: ''};
    checkbox: any = {checkboxtitle: ''};
    image: any = {imagetitle: ''};

    constructor( private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
    }

    clickTab(mode:string){
        this.activeTab = mode;
    }
    saveTopic(){
        this.listTopic.push(this.topic.topictitle);
    }
    saveRadio(){
        this.listTopic.push(this.radio.radiotitle);
    }
    saveDropdown(){
        this.listTopic.push(this.dropdown.dropdowntitle);
    }
    saveCheckbox(){
        this.listTopic.push(this.checkbox.checkboxtitle);
    }
    saveImage(){
        this.listTopic.push(this.image.imagetitle);
    }
}