import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhysicalPersonComponent } from './physical-person/physical-person.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ThreeComponent } from './three/three.component';
import { WeatherComponent } from './weather/weather.component';
import { RegisterComponent } from './register/register.component';
import { BabylonComponent } from './babylon/babylon.component';
import { WindowRefService } from './_services/window-ref.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-forms/template-driven-form/template-driven-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms/reactive-forms.component';
import { BabylonPlayComponent } from './babylon-play/babylon-play.component';

@NgModule({
	declarations: [
		AppComponent,
		PhysicalPersonComponent,
		NavbarComponent,
		HomeComponent,
		FooterComponent,
		EditPersonComponent,
		ThreeComponent,
		WeatherComponent,
		RegisterComponent,
		BabylonComponent,
		ProductListComponent,
		TemplateDrivenFormComponent,
		ReactiveFormsComponent,
		BabylonPlayComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		BsDatepickerModule.forRoot()
	],
	providers: [ WindowRefService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
