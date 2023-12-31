import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationcomponentComponent } from './navigationcomponent/navigationcomponent.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { FooterComponent } from './footer/footer.component';
import { BoostlinksComponent } from './boostlinks/boostlinks.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationcomponentComponent,
    GetstartedComponent,
    FooterComponent,
    BoostlinksComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
