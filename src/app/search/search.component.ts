import { Component, OnInit } from '@angular/core'

import { Query } from '../query'
import { SearchService } from '../search.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      query: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24),
        Validators.pattern('[a-zA-Z0-9/-_!& ]*'),
      ]],
    })
    this.form.valueChanges.subscribe(console.log)
  }

  get query() {
    return this.form.get('query')
  }

  async onSubmit() {
    this.searchService.search(this.query.value).subscribe(data => this.searchService.setData(data))
  }

}
