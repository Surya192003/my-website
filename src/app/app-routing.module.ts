import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClassInformationComponent } from './class-information/class-information.component';
import { ClassicalStylesComponent } from './classical-styles/classical-styles.component';
import { NonClassicalStylesComponent } from './non-classical-styles/non-classical-styles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'class-information', component: ClassInformationComponent },
  { path: 'classical-styles', component: ClassicalStylesComponent },
  { path: 'non-classical-styles', component: NonClassicalStylesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
