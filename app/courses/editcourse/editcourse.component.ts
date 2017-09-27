import { Component, OnInit } from '@angular/core'; 
import { RouterModule, ActivatedRoute } from '@angular/router';

import { User } from '../../_models/index';
import { AlertService, CourseService } from '../../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'editcourse.component.html'
})

export class EditcourseComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    loading = false;
    // model: any = {title: '', description:'', branch:Array, department:Array};
    model: any = { id:'', title: '', description:'', branch: [], department: [] };
    course: any = {id: ''};
    // {"courses":{"title":"First Course", "description":"description ","status": "Active","search": "first","accesstag": "guest"} }


    ListBranch: any = [];
    ListDepartment: Array<any> ;
   // mySelectValue: Array<string>; // Array of strings for multi select, string for single select.


    constructor(private route: ActivatedRoute, private alertService: AlertService, private courseService: CourseService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.course.id=this.route.snapshot.params['id'];
    }

    ngOnInit() {
        // this.alertService.success('Loading .. ');
        // this.loading = true;
        this.getBranch();
        this.getDepartment();
        this.alertService.success('Fetching .. ');
        this.getCourse();
    }
    getCourse(){
        this.courseService.getById(this.course).subscribe((resCourse) => { 
            this.model.id = resCourse.course.id;
            this.model.title = resCourse.course.title;
            this.model.description = resCourse.course.description;

            this.alertService.success('Course fetched successfully.');
        });
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
    private getDepartment() {
        this.courseService.getDepartment().subscribe((response) => {
            var tempDepartment = [];
            for (var i=0; i<response.department.length; i++){ 
                if(response.department[i].name){ 
                    var temp = {value:'', label:''};
                    temp.value = response.department[i].name;
                    temp.label = response.department[i].name;
                    tempDepartment.push(temp);
                }
            }
            this.ListDepartment = tempDepartment;

           // this.data = response.branch;
        });
    }
    private getBranch() {
        this.courseService.getBranch().subscribe((response) => {
            var tempBranch = [];
            for (var i=0; i<response.branch.length; i++){ 
                if(response.branch[i].name){ 
                    var temp = {value:'', label:''};
                    temp.value = response.branch[i].name;
                    temp.label = response.branch[i].name;
                    tempBranch.push(temp);
                }
            }
            this.ListBranch = tempBranch;

           // this.data = response.branch;
        });
    }
}