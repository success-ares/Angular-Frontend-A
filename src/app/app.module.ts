import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { TopbarComponent } from './pages/layout/topbar/topbar.component';
import { ServicesComponent } from './pages/services/services.component';
import { ByindustryComponent } from './pages/byindustry/byindustry.component';
import { StaffingsolutionsComponent } from './pages/staffingsolutions/staffingsolutions.component';
import { JobseekersComponent } from './pages/jobseekers/jobseekers.component';
import { OurcompanyComponent } from './pages/ourcompany/ourcompany.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ContingentworkforceComponent } from './pages/services/contingentworkforce/contingentworkforce.component';
import { TechnologyservicesComponent } from './pages/services/technologyservices/technologyservices.component';
import { ByindustrytechnologyservicesComponent } from './pages/byindustry/byindustrytechnologyservices/byindustrytechnologyservices.component';
import { BfsiComponent } from './pages/byindustry/bfsi/bfsi.component';
import { EngineeringComponent } from './pages/staffingsolutions/engineering/engineering.component';
import { InformationtechnologyComponent } from './pages/staffingsolutions/informationtechnology/informationtechnology.component';
import { ExploreapplyComponent } from './pages/jobseekers/exploreapply/exploreapply.component';
import { ConnectComponent } from './pages/jobseekers/connect/connect.component';
import { AboutusComponent } from './pages/ourcompany/aboutus/aboutus.component';
import { OurpeopleComponent } from './pages/ourcompany/ourpeople/ourpeople.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TopbarComponent,
    ServicesComponent,
    ByindustryComponent,
    StaffingsolutionsComponent,
    JobseekersComponent,
    OurcompanyComponent,
    ContactusComponent,
    ContingentworkforceComponent,
    TechnologyservicesComponent,
    ByindustrytechnologyservicesComponent,
    BfsiComponent,
    EngineeringComponent,
    InformationtechnologyComponent,
    ExploreapplyComponent,
    ConnectComponent,
    AboutusComponent,
    OurpeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'services', component: ServicesComponent },
        { path: 'services/contingentworkforce', component: ContingentworkforceComponent },
        { path: 'services/technologyservices', component: TechnologyservicesComponent },

      { path: 'byindustry', component: ByindustryComponent },
        { path: 'byindustry/technologyservices', component: ByindustrytechnologyservicesComponent },
        { path: 'byindustry/bfsi', component: BfsiComponent },


      { path: 'staffingsolutions', component: StaffingsolutionsComponent },
        { path: 'staffingsolutions/engineering', component: EngineeringComponent },
        { path: 'staffingsolutions/informationtechnology', component: InformationtechnologyComponent },

      { path: 'jobseekers', component: JobseekersComponent },
        { path: 'jobseekers/exploreapply', component: ExploreapplyComponent },
        { path: 'jobseekers/connect', component: ConnectComponent },

      { path: 'ourcompany', component: OurcompanyComponent },
        { path: 'ourcompany/aboutus', component: AboutusComponent },
        { path: 'ourcompany/ourpeople', component: OurpeopleComponent },

      { path: 'contactus', component: ContactusComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
