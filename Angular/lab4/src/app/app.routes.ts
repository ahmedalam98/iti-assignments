import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  // In Angular we don't use ( / ) in the path it will generate an error

  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },

  // This MUST be the last route because it will match any route that is not defined before
  { path: '**', component: ErrorComponent },
];
