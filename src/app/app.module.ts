import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  
  // The providers array tells Angular to create a single, shared instance of HeroService and inject into any class that asks for it.
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
