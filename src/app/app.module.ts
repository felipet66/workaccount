import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";

import { ReactiveFormsModule } from "@angular/forms";

import { LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { LoaderComponent } from "./pages/shared/components/loader/loader.component";
import { HiringSchemeTableComponent } from "./pages/shared/components/hiring-scheme-table/hiring-scheme-table.component";
import { ButtonComponent } from './pages/shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    HiringSchemeTableComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
