import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimentsPageRoutingModule } from './moviments-routing.module';

import { MovimentsPage } from './moviments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovimentsPageRoutingModule
  ],
  declarations: [MovimentsPage]
})
export class MovimentsPageModule {}
