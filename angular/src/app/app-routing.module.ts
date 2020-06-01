import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './navbar/result/result.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {path:'',component: MainComponent},
  {path:'main',component: MainComponent},
  {path:'navbar' ,component: NavbarComponent,canActivate: [AuthGuard]},
  {path:'result',component: ResultComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
