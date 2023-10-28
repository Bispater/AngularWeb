import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NewsComponent } from './pages/news/news.component';
import { ServicesComponent } from './pages/services/services.component';
import { SingupComponent } from './pages/singup/singup.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Define a route for the home component
  { path: 'contacto', component: ContactComponent},
  { path: 'mapa-verde', component: MapsComponent},
  { path: 'noticias', component: NewsComponent},
  { path: 'calendario', component: CalendarComponent},
  { path: 'servicios', component: ServicesComponent},
  { path: 'iniciar-sesion', component: LoginComponent},
  { path: 'crear-cuenta', component: SingupComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
