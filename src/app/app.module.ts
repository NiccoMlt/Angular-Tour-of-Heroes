import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms' // <-- NgModel lives here
import {HeroesComponent} from './heroes/heroes.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
import {MessagesComponent} from './messages/messages.component'
import {DashboardComponent} from './dashboard/dashboard.component'

@NgModule({
    // AppModule declares both application components, AppComponent and HeroesComponent
    declarations: [ // Every component must be declared in exactly one NgModule
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent
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
