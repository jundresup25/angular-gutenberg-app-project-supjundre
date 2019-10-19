import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListComponent } from './book-list/book-list.component';
import { DelimiterPipe } from './common/delimiter.pipe';
import { InfiniteScrollerDirective } from './common/infinite-scroller.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookListComponent,
    DelimiterPipe,
    InfiniteScrollerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
