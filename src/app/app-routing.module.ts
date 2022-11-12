import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component';

const routes: Routes = [
  {
    path: 'fotos', component: PhotoListComponent
  },
  {
    path: '**', redirectTo: 'fotos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
