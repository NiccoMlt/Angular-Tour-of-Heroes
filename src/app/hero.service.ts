import {Injectable} from '@angular/core'
import {Hero} from './hero'
import {HEROES} from './mock-heroes'
import {Observable, of} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {MessageService} from './message.service'

@Injectable({
    // When you provide the service at the root level,
    // Angular creates a single, shared instance of HeroService and injects into any class that asks for it
    providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes'  // URL to web api

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    /** GET heroes from the server */
    getHero(id: number): Observable<Hero> {
        const heroObservable: Observable<Hero> = of(HEROES.find(hero => hero.id === id))
        heroObservable.subscribe(hero => this.messageService.add(`HeroService: fetched hero id=${hero.id}`))
        return heroObservable
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`)
    }
}
