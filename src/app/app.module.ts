import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { OurExpertsComponent } from './pages/about-us/our-experts/our-experts.component';
import { VolticanEdgeComponent } from './pages/about-us/voltican-edge/voltican-edge.component';
import { ClienteleComponent } from './pages/about-us/clientele/clientele.component';
import { DataAnalyticsComponent } from './pages/services/data-analytics/data-analytics.component';
import { BigDataComponent } from './pages/services/big-data/big-data.component';
import { StrategyComponent } from './pages/services/strategy/strategy.component';
import { DataScienceComponent } from './pages/services/data-science/data-science.component';
import { OtherServicesComponent } from './pages/services/other-services/other-services.component';
import { AgmCoreModule } from '@agm/core';
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    AboutUsComponent,
    CarrersComponent,
    ContactUsComponent,
    CertificationsComponent,
    OurExpertsComponent,
    VolticanEdgeComponent,
    ClienteleComponent,
    DataAnalyticsComponent,
    BigDataComponent,
    StrategyComponent,
    DataScienceComponent,
    OtherServicesComponent,
  ],
  imports: [
    NguCarouselModule,
    CarouselModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
