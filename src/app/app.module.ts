import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    RulesComponent,
    RegistrationComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
    MissionStatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
