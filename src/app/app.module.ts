import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
	imports: [
    BrowserModule,
		HttpClientModule,
		FontAwesomeModule,
		FormsModule
  ],
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    ListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
