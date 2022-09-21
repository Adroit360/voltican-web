import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { ClienteleComponent } from './pages/about-us/clientele/clientele.component';
import { OurExpertsComponent } from './pages/about-us/our-experts/our-experts.component';
import { VolticanEdgeComponent } from './pages/about-us/voltican-edge/voltican-edge.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about/voltican-edge',
    component: VolticanEdgeComponent,
  },
  { path: 'about/clientele', component: ClienteleComponent },
  { path: 'about/our-experts', component: OurExpertsComponent },
  { path: 'careers', component: CarrersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
