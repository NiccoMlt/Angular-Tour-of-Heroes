import {Component, OnInit} from '@angular/core'
import {Hero} from '../hero'
import { HEROES } from '../mock-heroes'

// @Component is a decorator function that specifies the Angular metadata for the component
@Component({
    selector: 'app-heroes',                   // the component's CSS element selector
    templateUrl: './heroes.component.html',   // the location of the component's template file
    styleUrls: ['./heroes.component.sass']    // the location of the component's private CSS styles
})

export class HeroesComponent implements OnInit { // Always export the component class so you can import it elsewhere

    heroes = HEROES
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    }

    constructor() {
    }

    // Angular calls ngOnInit shortly after creating a component
    // It's a good place to put initialization logic
    ngOnInit() {
    }

}
