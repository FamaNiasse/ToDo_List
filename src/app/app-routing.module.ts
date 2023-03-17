import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { SelectedPageComponent } from './pages/selected-page/selected-page.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },

  {
    path:"selected",
    component: SelectedPageComponent
  },

  {
    path:"history",
    component: HistoryComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
