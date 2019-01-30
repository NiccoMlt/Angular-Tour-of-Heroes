import {Component, OnInit} from '@angular/core'
import {Hero} from '../hero'
import {HeroService} from '../hero.service'

// @Component is a decorator function that specifies the Angular metadata for the component
@Component({
    selector: 'app-heroes',                   // the component's CSS element selector
    templateUrl: './heroes.component.html',   // the location of the component's template file
    styleUrls: ['./heroes.component.sass']    // the location of the component's private CSS styles
})

export class HeroesComponent implements OnInit { // Always export the component class so you can import it elsewhere

    heroes: Hero[]
    selectedHero: Hero

    // Angular calls ngOnInit shortly after creating a component

    constructor(private heroService: HeroService) {
    }

    // It's a good place to put initialization logic
    ngOnInit() {
        this.getHeroes()
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero
    }

    private getHeroes() {
        this.heroService
            .getHeroes()
            .subscribe(heroes => this.heroes = heroes)
    }
}
