import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes 
import { AppRoutingModule } from './rutas.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatosPersonalesComponent,
    HomeComponent,
    FormacionComponent,
    ExperienciaComponent,
    PortfolioComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

