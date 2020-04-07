import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderStatusPageRoutingModule } from './order-status-routing.module';

import { OrderStatusPage } from './order-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderStatusPageRoutingModule
  ],
  declarations: [OrderStatusPage]
})
export class OrderStatusPageModule {}
