import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './main-components/nav/nav.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
