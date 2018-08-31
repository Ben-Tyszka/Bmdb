import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material'

import { SearchComponent } from './search.component'

describe('SearchComponent', () => {
  let component: SearchComponent
  let fixture: ComponentFixture<SearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports:
        [
          ReactiveFormsModule,
          BrowserAnimationsModule,
          HttpClientModule,
          MatCardModule,
          MatFormFieldModule,
          MatInputModule,
          MatToolbarModule,
          MatButtonModule,
          MatIconModule,
        ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
    component.ngOnInit()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('form should be disabled to start', () => {
    expect(component.form.valid).toBeFalsy()
  })

  it('form should be disabled if less than 3 characters', () => {
    component.form.get('query').setValue('ee')
    expect(component.form.valid).toBeFalsy()
  })

  it('form should be disabled if more than 24 characters', () => {
    component.form.get('query').setValue('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    expect(component.form.valid).toBeFalsy()
  })

  it('form should be disabled if strange characters are entered', () => {
    component.form.get('query').setValue('B)n *% Ko*>')
    expect(component.form.valid).toBeFalsy()
  })

  it('form should be enabled if normal input', () => {
    component.form.get('query').setValue('Star Wars')
    expect(component.form.valid).toBeTruthy()
  })

})
