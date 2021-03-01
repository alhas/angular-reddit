import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ArticleComponent} from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
