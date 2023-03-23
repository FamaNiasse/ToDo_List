import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtListComponent } from './components/butt-list/butt-list.component';
import { CategoryComponent } from './components/category/category.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectedComponent } from './components/selected/selected.component';
import { UrgentComponent } from './components/urgent/urgent.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectedPageComponent } from './pages/selected-page/selected-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtListComponent,
    CategoryComponent,
    ButtonComponent,
    SelectedComponent,
    UrgentComponent,
    HomeComponent,
    HistoryComponent,
    SelectedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
