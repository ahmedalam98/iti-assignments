import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailsComponent } from './Pages/details/details.component';
import { AddComponent } from './Pages/add/add.component';
import { UpdateUserComponent } from './Pages/update/update.component';
import { ErrorComponent } from './Pages/error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: DetailsComponent },
  { path: 'add', component: AddComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: '**', component: ErrorComponent },
];
