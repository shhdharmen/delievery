import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderStatusPage } from './order-status.page';

describe('OrderStatusPage', () => {
  let component: OrderStatusPage;
  let fixture: ComponentFixture<OrderStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
