import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';
import { SearchDescriptionPipe } from './pipes/search-description.pipe';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchDescriptionPipe,
    SearchInputComponent,
    MainComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
