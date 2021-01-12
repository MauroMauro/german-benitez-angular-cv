import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from 'src/app/componentes/home/home.component';
import {DatosPersonalesComponent} from 'src/app/componentes/datos-personales/datos-personales.component';
import {FormacionComponent} from 'src/app/componentes/formacion/formacion.component';
import {ExperienciaComponent} from 'src/app/componentes/experiencia/experiencia.component';
import {SkillsComponent} from 'src/app/componentes/skills/skills.component';
import {PortfolioComponent} from 'src/app/componentes/portfolio/portfolio.component';
import {ProyectosComponent} from 'src/app/componentes/proyectos/proyectos.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'datos-personales', component: DatosPersonalesComponent},
  { path: 'formacion', component: FormacionComponent},
  { path: 'experiencia', component: ExperienciaComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'portfolio', component: PortfolioComponent}, 
  { path: 'proyectos', component: ProyectosComponent}, 
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}


