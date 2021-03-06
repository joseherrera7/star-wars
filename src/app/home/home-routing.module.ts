import { DetailComponent } from './../detail/detail.component';
import { CreateComponent } from './../create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'modify',
    component: CreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
