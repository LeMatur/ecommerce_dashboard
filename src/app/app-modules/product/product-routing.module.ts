import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityGuard } from 'src/app/core/services/entity.guard';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"", component: ProductsComponent, canActivate: [EntityGuard],
  children: [
    {path:"products", component: ProductsComponent, canActivate: [EntityGuard]},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}