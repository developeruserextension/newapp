import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TopBannerComponent } from './home-page/top-banner/top-banner.component';
import { NgxPopper } from 'angular-popper';
import { QuoteSectionComponent } from './home-page/quote-section/quote-section.component';
import { OffersSectionComponent } from './home-page/offers-section/offers-section.component';
import { ServicesSectionComponent } from './home-page/services-section/services-section.component';
import { MoreServicesSectionComponent } from './home-page/more-services-section/more-services-section.component';
import { VideosSectionComponent } from './home-page/videos-section/videos-section.component';
import { TestimonialsSectionComponent } from './home-page/testimonials-section/testimonials-section.component';
import { BlogsSectionComponent } from './home-page/blogs-section/blogs-section.component';
import { TryOurServicesSectionComponent } from './home-page/try-our-services-section/try-our-services-section.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    TopBannerComponent,
    QuoteSectionComponent,
    OffersSectionComponent,
    ServicesSectionComponent,
    MoreServicesSectionComponent,
    VideosSectionComponent,
    TestimonialsSectionComponent,
    BlogsSectionComponent,
    TryOurServicesSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
