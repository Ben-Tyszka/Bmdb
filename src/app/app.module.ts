import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { SearchComponent } from './search/search.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MovieComponent } from './movie/movie.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
