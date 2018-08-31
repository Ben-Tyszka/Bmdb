import { SearchService } from './search.service'
import { IContent } from './content'
import { defer } from 'rxjs'

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data))
}

describe('SearchService', () => {
    let service: SearchService
    let httpClientSpy: { get: jasmine.Spy }
    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
        service = new SearchService(<any>httpClientSpy)
    })

    it('should return movie on valid query', () => {
        const expectedMovie: IContent = {
            Country: 'USA',
            Title: 'Test',
            Director: 'TEst',
            Genre: 'Test',
            Metascore: 'Test',
            Plot: 'Test',
            Poster: 'Test',
            Production: 'Test',
            Released: 'Test',
        }
        httpClientSpy.get.and.returnValue(asyncData(expectedMovie))
        service.search('Test').subscribe(
            data => expect(data).toEqual(expectedMovie, 'expected movie'),
            fail
        )
    })
})
