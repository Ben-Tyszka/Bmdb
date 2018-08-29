import { Component, OnInit } from '@angular/core'

import { Query } from '../query'
import { SearchService } from '../search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  model = new Query('')

  constructor(private searchService: SearchService) { }

  ngOnInit() { }

  onSubmit() {
    const { query } = this.model

    this.searchService.search(query).subscribe((data) => this.searchService.setData(data))
  }

}
