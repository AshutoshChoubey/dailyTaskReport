import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleaddComponent } from './simpleadd/simpleadd.component';

const routes: Routes = [
  {
    path: 'addmore', component: SimpleaddComponent
    //  children: [
    //   { path: 'addmore', component: SimpleaddComponent }]
  },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
