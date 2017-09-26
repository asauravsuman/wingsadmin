﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from "angular2-datatable";
import {SelectModule} from 'angular2-select';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent, DataFilterPipe } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, OrganisationService, CourseService } from './_services/index';

import { FooterComponent } from './shared/footer/index';
import { MenuComponent } from './shared/menu/index';
import { LogoComponent } from './shared/logo/index';
import { HeaderComponent } from './shared/header/index';
import { HomeComponent } from './home/index';
import { OrganisationComponent, EditorganisationComponent } from './organisation/index';
import { ProfileComponent } from './profile/index';
import { UsersComponent, EdituserComponent } from './users/index';
import { EmployeeComponent, AddemployeeComponent, EditemployeeComponent } from './employee/index';
import { CoursesComponent, EditcourseComponent, AddtopictocourseComponent } from './courses/index';
import { SettingsComponent } from './settings/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DataTableModule,
        routing,
        SelectModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        DataFilterPipe,
        LogoComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        OrganisationComponent, EditorganisationComponent,
        ProfileComponent,
        UsersComponent, EdituserComponent,
        EmployeeComponent, AddemployeeComponent, EditemployeeComponent,
        CoursesComponent, EditcourseComponent, AddtopictocourseComponent,
        SettingsComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        OrganisationService,
        CourseService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }