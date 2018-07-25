import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyPageComponent } from './typography-page/typography-page.component';
import { HeadersPageComponent } from './headers-page/headers-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ElevationPageComponent } from './elevation-page/elevation-page.component';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { GettingStartedPageComponent } from './getting-started-page/getting-started-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TypographyPageComponent, HeadersPageComponent, ListPageComponent, ElevationPageComponent, ButtonsPageComponent, GettingStartedPageComponent]
})
export class PagesModule { }
