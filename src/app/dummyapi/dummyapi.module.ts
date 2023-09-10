import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DummyapiPageRoutingModule } from './dummyapi-routing.module';

import { DummyapiPage } from './dummyapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DummyapiPageRoutingModule
  ],
  declarations: [DummyapiPage]
})
export class DummyapiPageModule {}
