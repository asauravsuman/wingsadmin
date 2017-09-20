import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { AlertService, CourseService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'editcourse.component.html'
})

export class EditcourseComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;
    // model: any = {title: '', description:'', branch:Array, department:Array};
    model: any = { title: '', description:'', branch: [], department: [] };


    ListBranch: Array<any> ;
    ListDepartment: Array<any> ;
   // mySelectValue: Array<string>; // Array of strings for multi select, string for single select.


    constructor( private alertService: AlertService, private courseService: CourseService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
        this.ListBranch = [
            {value: 'a', label: 'Alpha'},
            {value: 'b', label: 'Beta'},
            {value: 'c', label: 'Gamma'}
        ];
        this.ListDepartment = [
            {value: 'a', label: 'IT'},
            {value: 'b', label: 'HR'},
            {value: 'c', label: 'NETWORKING'}
        ];
    }
    saveCourse(){
        this.alertService.success('Saving in progress ... ');
        this.courseService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Saved successfully.');
                },
                error => {
                    this.alertService.error('Please try again.');
                });
    }
}