import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityGuard } from 'src/app/core/services/entity.guard';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

const routes: Routes = [
  {path:"", component: CategoriesComponent, canActivate: [EntityGuard],
  children: [
    {path:"categories", component: CategoriesComponent, canActivate: [EntityGuard]},
    {path:"sub-categories", component: SubCategoriesComponent, canActivate: [EntityGuard]},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}