import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HeaderStyleComponent } from './components/header-style/header-style.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormBlogComponent } from './components/form-blog/form-blog.component';
import { ListaBlogsComponent } from './components/lista-blogs/lista-blogs.component';
import { ContainerBlogComponent } from './components/container-blog/container-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderStyleComponent,
    BlogComponent,
    FormBlogComponent,
    ListaBlogsComponent,
    ContainerBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
