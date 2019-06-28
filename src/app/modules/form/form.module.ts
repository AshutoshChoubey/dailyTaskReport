import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { SimpleaddComponent } from './simpleadd/simpleadd.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SimpleaddComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
       MatButtonModule
  ]
})
export class FormModule { }
