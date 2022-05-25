import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './modules/post/post.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, PostModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
