import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragNDropComponent } from './components/drag-n-drop/drag-n-drop.component';
import { NgrxEffectsComponent } from './components/ngrx-effects/ngrx-effects.component';

@NgModule({
  declarations: [
    AppComponent,
    DragNDropComponent,
    NgrxEffectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
