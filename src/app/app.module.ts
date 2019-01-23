import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchHubService } from './search/search-hub.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GsearchComponent } from './gsearch/gsearch.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    GsearchComponent,
    HighlightDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [SearchHubService],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
