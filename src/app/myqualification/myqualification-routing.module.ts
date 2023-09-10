import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyqualificationPage } from './myqualification.page';

const routes: Routes = [
  {
    path: '',
    component: MyqualificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyqualificationPageRoutingModule {}
