import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie';
import { CONTENT } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getContent(): Observable<Movie[]> {
    return of(CONTENT);
  }

  getContentById(id: number): Observable<Movie> {
    const content = CONTENT.find(c => c.id === id);
    return of(content);
  }

}
