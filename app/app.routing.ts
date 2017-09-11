import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { OrganisationComponent, EditorganisationComponent } from './organisation/index';
import { ProfileComponent } from './profile/index';
import { UsersComponent, EdituserComponent } from './users/index';
import { EmployeeComponent, EditemployeeComponent} from './employee/index';
import { CoursesComponent, EditcourseComponent, AddtopictocourseComponent } from './courses/index';
import { SettingsComponent } from './settings/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'organisation', component: OrganisationComponent, canActivate: [AuthGuard] },
    { path: 'edit-organisation', component: EditorganisationComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'edit-user', component: EdituserComponent, canActivate: [AuthGuard] },
    { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
    { path: 'edit-employee', component: EditemployeeComponent, canActivate: [AuthGuard] },
    { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
    { path: 'edit-course', component: EditcourseComponent, canActivate: [AuthGuard] },
    { path: 'add-topic-to-course', component: AddtopictocourseComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);