import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms' // <-- NgModel lives here
import {HeroesComponent} from './heroes/heroes.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component'

@NgModule({
    // AppModule declares both application components, AppComponent and HeroesComponent
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent // Every component must be declared in exactly one NgModule
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
