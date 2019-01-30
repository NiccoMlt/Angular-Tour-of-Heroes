import {Injectable} from '@angular/core'
import {Hero} from './hero'
import {Observable, of} from 'rxjs'
import {catchError, tap} from 'rxjs/operators'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {MessageService} from './message.service'

@Injectable({
    // When you provide the service at the root level,
    // Angular creates a single, shared instance of HeroService and injects into any class that asks for it
    providedIn: 'root'
})
export class HeroService {

    readonly httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    private heroesUrl = 'api/heroes'  // URL to web api

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    /** GET hero by id. Will 404 if id not found */
    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`
        return this.http.get<Hero>(url).pipe(
            tap(() => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        )
    }

    /** GET heroes from the server */
    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(() => this.log('fetched heroes')),
                catchError(this.handleError('getHeroes', [])) // The catchError() intercepts an Observable that failed
            )
    }

    /** PUT: update the hero on the server */
    updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
            tap(() => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('updateHero'))
        )
    }

    /** POST: add a new hero to the server */
    addHero(h: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, h, this.httpOptions).pipe(
            tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
            catchError(this.handleError<Hero>('addHero'))
        )
    }

    /** DELETE: delete the hero from the server */
    deleteHero(hero: Hero | number): Observable<Hero> {
        const id = typeof hero === 'number' ? hero : hero.id
        const url = `${this.heroesUrl}/${id}`

        return this.http.delete<Hero>(url, this.httpOptions).pipe(
            tap(() => this.log(`deleted hero id=${id}`)),
            catchError(this.handleError<Hero>('deleteHero'))
        )
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`)
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error) // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`)

            // Let the app keep running by returning an empty result.
            return of(result as T)
        }
    }
}
