import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/common/article-response.interface';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
  standalone:false

})
export class ArticleDetailPage implements OnInit {
  article: Article | undefined;
  constructor(
    private articlesSerivce: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) { 
  }

  async ngOnInit() {
    await this.loadArticle();
  }

  async loadArticle(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      try {
        const response = await this.articlesSerivce.getArticleById(+id); // + -> string을 number로 형변환 해줌줌
        this.article = response.data;
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
        
      }
    }else{
      console.error('Fetch error');
    }

  }
  
}
