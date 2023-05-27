import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityGuard } from 'src/app/core/services/entity.guard';
import { VendorsComponent } from './vendors/vendors.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';

const routes: Routes = [
    {path:"", component: VendorsComponent, canActivate: [EntityGuard],
  children: [
    {path:"vendors", component: VendorsComponent, canActivate: [EntityGuard]},
    {path:"create-vendor", component: CreateVendorComponent, canActivate: [EntityGuard]},
    {path:"vendor-profile", component: VendorProfileComponent, canActivate: [EntityGuard]}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule {}