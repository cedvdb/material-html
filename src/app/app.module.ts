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
import { PagesModule } from './pages/pages.module';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { CodeComponent } from './components/code/code.component';
import { PaletteComponent } from './pages/palette/palette.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { HelperClassesComponent } from './pages/helper-classes/helper-classes.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		PagesModule,
		RouterModule.forRoot([
			{ path: '', pathMatch: 'full', redirectTo: 'getting-started' },
			{ path: 'typography', component: TypographyPageComponent },
			{ path: 'header', component: HeadersPageComponent },
			{ path: 'list', component: ListPageComponent },
			{ path: 'elevation', component: ElevationPageComponent },
			{ path: 'button', component: ButtonsPageComponent },
			{ path: 'getting-started', component: GettingStartedPageComponent },
			{ path: 'card', component: CardPageComponent },
			{ path: 'palette', component: PaletteComponent },
			{ path: 'menu', component: MenuPageComponent },
			{ path: 'helpers', component: HelperClassesComponent },
			{ path: 'input', component: InputsPageComponent },
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
