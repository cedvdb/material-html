import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';
import { HeadersPageComponent } from './pages/headers-page/headers-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ElevationPageComponent } from './pages/elevation-page/elevation-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { GettingStartedPageComponent } from './pages/getting-started-page/getting-started-page.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: 'typography', component: TypographyPageComponent },
			{ path: 'header', component: HeadersPageComponent },
			{ path: 'list', component: ListPageComponent },
			{ path: 'elevation', component: ElevationPageComponent },
			{ path: 'button', component: ButtonsPageComponent },
			{ path: 'getting-started', component: GettingStartedPageComponent }
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
