import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyPageComponent } from './typography-page/typography-page.component';
import { HeadersPageComponent } from './headers-page/headers-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ElevationPageComponent } from './elevation-page/elevation-page.component';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { GettingStartedPageComponent } from './getting-started-page/getting-started-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CodeComponent } from '../components/code/code.component';
import { PaletteComponent } from './palette/palette.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { HelpersPageComponent } from './helpers-page/helpers-page.component';
import { LayoutsPageComponent } from './layouts-page/layouts-page.component';
import { InputsPageComponent } from './inputs-page/inputs-page.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		CodeComponent,
		TypographyPageComponent,
		HeadersPageComponent,
		ListPageComponent,
		ElevationPageComponent,
		ButtonsPageComponent,
		GettingStartedPageComponent,
		CardPageComponent,
		HelperClassesComponent,
		HomePageComponent,
		PaletteComponent,
		MenuPageComponent,
		HelpersPageComponent,
		LayoutsPageComponent,
		InputsPageComponent,
	],
	exports: [
		TypographyPageComponent,
		HeadersPageComponent,
		ListPageComponent,
		ElevationPageComponent,
		ButtonsPageComponent,
		GettingStartedPageComponent
	]
})
export class PagesModule { }
