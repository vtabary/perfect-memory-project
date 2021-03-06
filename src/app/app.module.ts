import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

import { FormsModule }   from '@angular/forms';
import { ByNamePipe } from './byname.pipe';
import { ByYearPipe } from './byyear.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieCardComponent,
    ByNamePipe,
    ByYearPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
