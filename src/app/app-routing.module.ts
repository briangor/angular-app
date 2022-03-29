import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard]
   },
  { 
    path: 'users/:id', 
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'users', 
    component: UsersComponent,
    canActivate: [AuthGuard]
  },  
  { 
    path: 'account', 
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
