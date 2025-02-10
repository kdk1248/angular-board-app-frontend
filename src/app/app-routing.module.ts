import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  // {
  //   path: 'articles-list',
  //   loadChildren: () => import('./articles/articles-list/articles-list.module').then( m => m.ArticlesListPage)
  // },
  // {
  //   path: 'article-detail',
  //   loadChildren: () => import('./articles/article-detail/article-detail.module').then( m => m.ArticleDetailPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
