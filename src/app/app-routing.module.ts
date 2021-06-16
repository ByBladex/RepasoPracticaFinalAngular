import { AuthGuard } from './guards/auth.guard';
import { ContainerBlogComponent } from './components/container-blog/container-blog.component';
import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
  },
  {
    path: 'login',
    component: FormComponent
  },
  {
    path: 'blog',
    component: ContainerBlogComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
