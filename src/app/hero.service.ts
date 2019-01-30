import {Injectable} from '@angular/core'
import {Hero} from './hero'
import {HEROES} from './mock-heroes'
import {Observable, of} from 'rxjs'
import {MessageService} from './message.service'

@Injectable({
    // When you provide the service at the root level,
    // Angular creates a single, shared instance of HeroService and injects into any class that asks for it
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService) {
    }

    getHeroes(): Observable<Hero[]> {
        const heroes: Observable<Hero[]> = of(HEROES)
        heroes.subscribe(() => this.messageService.add('HeroService: fetched heroes'))
        return heroes
    }
}
