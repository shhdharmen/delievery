import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderStatusPage } from './order-status.page';

const routes: Routes = [
  {
    path: '',
    component: OrderStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderStatusPageRoutingModule {}
