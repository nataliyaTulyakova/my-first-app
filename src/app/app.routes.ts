import { Routes } from '@angular/router';

import { UserProfile } from './user-profile/user-profile';
import { NewComp } from './new-comp/new-comp';


export const routes: Routes = [
    {path: 'user-profile', component: UserProfile},
    {path: 'new-comp', component: NewComp}
];

