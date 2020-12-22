import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';



@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule
  ], exports:[CustomersModule]
})
export class CustomersModule { }