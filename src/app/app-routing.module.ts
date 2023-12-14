import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/layouts/main/main.component';
import { ComponentParentComponent } from './components/component-parent/component-parent.component';
import { ComponentChildrenComponent } from './components/component-children/component-children.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInRfComponent } from './sign-in-rf/sign-in-rf.component';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-in-rf',
    component: SignInRfComponent,
  },
  {
    path: 'parent',
    component: ComponentParentComponent,
    children: [{ path: 'child', component: ComponentChildrenComponent }],
  },
  {
    path: 'article-list',
    component: ArticleListComponent,
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
