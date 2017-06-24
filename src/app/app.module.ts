import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HtmlOutlet } from './html-outlet/html-outlet.component';
import { DynamicTemplateComponent } from './form-dynamic-template/dynamic-template.component';

@NgModule({
  declarations: [
    AppComponent, HtmlOutlet, DynamicTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
