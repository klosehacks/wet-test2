import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';
import { PublicationsComponent } from './components/publications/publications.component'
import { AppRouting } from './app-routing.module';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PublicationHellwormsComponent } from './components/publications-cards/publication-hellworms/publication-hellworms.component';
import { PublicationDinosourComponent } from './components/publications-cards/publication-dinosour/publication-dinosour.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    TopMenuComponent,
    FooterComponent,
    HomeComponent,
    PublicationHellwormsComponent,
    PublicationDinosourComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRouting,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
