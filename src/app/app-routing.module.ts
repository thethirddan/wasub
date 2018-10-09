import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';

const routes: Routes = [
  { path: 'missionStatement', component: MissionStatementComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule  { }
