import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SplashpageComponent } from './splashpage/splashpage.component';
import { GreenPageComponent } from './green-page/green-page.component';
import { YellowPageComponent } from './yellow-page/yellow-page.component';
import { RedPageComponent } from './red-page/red-page.component';
import { AlternateViewComponent } from './alternate-view/alternate-view.component';
import { TestPageOneComponent } from './test-page-one/test-page-one.component';
import { TestPageTwoComponent } from './test-page-two/test-page-two.component';
import { TestPageThreeComponent } from './test-page-three/test-page-three.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SplashpageComponent,
    GreenPageComponent,
    YellowPageComponent,
    RedPageComponent,
    AlternateViewComponent,
    TestPageOneComponent,
    TestPageTwoComponent,
    TestPageThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DialogModule,
    TableModule,
    CalendarModule,
    AccordionModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
