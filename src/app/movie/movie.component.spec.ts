import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material'
import { DebugElement } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { MovieComponent } from './movie.component'
import { SearchService } from '../search.service'

describe('MovieComponent', () => {
    let component: MovieComponent
    let fixture: ComponentFixture<MovieComponent>
    let searchService: SearchService
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MovieComponent],
            imports: [MatCardModule, BrowserAnimationsModule, HttpClientModule],
            providers: [SearchService],
        })
            .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieComponent)
        component = fixture.componentInstance
        searchService = TestBed.get(SearchService)

        fixture.detectChanges()
        component.ngOnInit()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('movie card should be hidden by default', () => {
        const elem: DebugElement = fixture.debugElement
        const elemNative: HTMLElement = elem.nativeElement
        expect(elemNative.querySelector('.movieCard')).toBe(null)
    })

    it('no result card should be hidden by default', () => {
        const elem: DebugElement = fixture.debugElement
        const elemNative: HTMLElement = elem.nativeElement
        expect(elemNative.querySelector('.movieCardError')).toBe(null)
    })

})
