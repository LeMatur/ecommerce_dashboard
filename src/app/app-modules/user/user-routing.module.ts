import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityGuard } from 'src/app/core/services/entity.guard';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:"", component: UsersComponent, canActivate: [EntityGuard],
  children: [
    {path:"users", component: UsersComponent, canActivate: [EntityGuard]},
    {path:"create-user", component: CreateUserComponent, canActivate: [EntityGuard]},
    {path:"user-profile", component: UserProfileComponent, canActivate: [EntityGuard]}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}