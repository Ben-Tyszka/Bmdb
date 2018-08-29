import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { IContent } from './content'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiKey: String = '57b1e873'

  constructor(private http: HttpClient) { }

  search(query: String): Observable<IContent> {
    return this.http.get<IContent>(`http://www.omdbapi.com/?apikey=${this.apiKey}&t=${query}`)
  }
}
