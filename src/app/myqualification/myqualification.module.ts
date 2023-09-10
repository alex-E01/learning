import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyqualificationPageRoutingModule } from './myqualification-routing.module';

import { MyqualificationPage } from './myqualification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyqualificationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MyqualificationPage]
})
export class MyqualificationPageModule {}
