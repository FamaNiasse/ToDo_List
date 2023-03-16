import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SelectedComponent } from './pages/selected/selected.component';
import { TaskComponent } from './pages/task/task.component';
import { HistoryComponent } from './pages/history/history.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },

  {
    path:"selected",
    component: SelectedComponent
  },

  {
    path:"task",
    component: TaskComponent
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
