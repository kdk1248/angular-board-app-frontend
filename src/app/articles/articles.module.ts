import { NgModule } from '@angular/core';
import { ArticlesPageRoutingModule } from './articles-routing.module';
import { ArticlesListPage } from './articles-list/articles-list.page';
import { ArticleDetailPage } from './article-detail/article-detail.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesPageRoutingModule
  ],
  declarations: [
    ArticlesListPage,
    ArticleDetailPage
  ]
})
export class ArticlesModule { }
