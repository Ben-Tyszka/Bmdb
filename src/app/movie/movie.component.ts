import { Component, OnInit } from '@angular/core'

import { SearchService } from '../search.service'
import { IContent } from '../content'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  content: IContent

  constructor(private readonly searchService: SearchService) {
    searchService.apiData$.subscribe(data => {
      console.log(data)
      this.content = data
    }
    )
  }

  ngOnInit() { }

}
