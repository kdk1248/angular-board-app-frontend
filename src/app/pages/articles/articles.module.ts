import { NgModule } from '@angular/core';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesRoutingModule,
  ],
  declarations: [
    ArticlesListComponent,
    ArticleDetailComponent
  ]
})
export class ArticlesModule { }
