import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/common/article-response.interface';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.page.html',
  styleUrls: ['./articles-list.page.scss'],
  standalone:false
})
export class ArticlesListPage implements OnInit {
  articles: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private router: Router //경로 이동을 위함(앵귤러에서 지원원)
  ) { }

  async ngOnInit() {
    try {
      const response = await this.articlesService.getAllArticles();
      if(response.success){
        this.articles = response.data;
      }else{
        console.error(response.message);
      }
    } catch (error) {
      console.error('Fetch error', error);
      
    }
  }

  //route Article detail page
  viewArticle(id: number){
    this.router.navigate([`detail/${id}`])

  }
}
