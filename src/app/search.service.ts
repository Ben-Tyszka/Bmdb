import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { IContent } from './content'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiKey: String = '57b1e873'
  private apiData = new BehaviorSubject<IContent>(null)
  public apiData$ = this.apiData.asObservable()

  constructor(private http: HttpClient) { }

  search(query: String): Observable<IContent> {
    return this.http.get<IContent>(`https://www.omdbapi.com/?apikey=${this.apiKey}&t=${query}`)
      .pipe(
        map(data => data)
      )
  }

  setData(data) {
    this.apiData.next(data)
  }

}
