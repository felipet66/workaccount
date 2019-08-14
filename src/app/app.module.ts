import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";

import { ReactiveFormsModule } from "@angular/forms";

import { LOCALE_ID } from "@angular/core";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
