import { Component, OnInit } from '@angular/core'

import { Query } from '../query'
import { SearchService } from '../search.service'
import { IContent } from '../content'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  model = new Query('')
  content: IContent

  constructor(private searchService: SearchService) { }

  ngOnInit() { }

  onSubmit() {
    const { query } = this.model
    console.log('searching... %s', query)
    this.searchService.search(query)
      .subscribe((data: IContent) => this.content = data)
  }

}
