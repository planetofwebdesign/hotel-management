import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OccupantsComponent } from './home-page/occupants/occupants.component';
import { DynamicTableModule } from './dynamic-table/dynamic-table.module';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OccupantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DynamicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
