import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhysicalPersonComponent } from './physical-person/physical-person.component';
import { HomeComponent } from './home/home.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { WeatherComponent } from './weather/weather.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { ProductListComponent } from './products/product-list/product-list.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-forms/template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms/reactive-forms.component';
import { BabylonPlayComponent } from './babylon-play/babylon-play.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: '',
		runGuardsAndResolvers: 'always',
		canActivate: [ AuthGuard ],
		children: [
			{ path: 'list', component: PhysicalPersonComponent },
			{ path: 'edit', component: EditPersonComponent },
			{ path: 'weather', component: WeatherComponent }
		]
	},
	{ path: 'register', component: RegisterComponent },
	{ path: 'products', component: ProductListComponent },
	{ path: 'templateDrivenForm', component: TemplateDrivenFormComponent },
	{ path: 'reactiveForm', component: ReactiveFormsComponent },
	{ path: 'babylonJS', component: BabylonPlayComponent },
	{ path: 'ThreeJS', component: ThreeComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
