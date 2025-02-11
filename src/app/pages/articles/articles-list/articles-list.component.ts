import { Component, OnInit } from '@angular/core';
import { ArticleResponse } from 'src/app/models/articles/article-response.interface';
import { ArticlesService } from '../../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  standalone: false
})
export class ArticlesListComponent implements OnInit {
  articles: ArticleResponse[] = [];

  constructor(
    private articlesService: ArticlesService,
    private router: Router //경로 이동을 위함(앵귤러에서 지원)
  ) { }

  ngOnInit() {
    this.articlesService.getAllArticles().subscribe({
      next: response => {
        if (response.success) {
          this.articles = response.data;
        } else {
          console.error(response.message);
        }
      },
      error: err => {
        console.error('Error fetching articles:', err);
      },
      complete: () => {
        console.log('Fetching articles request completed.');
      }
    });
  }
  
  viewArticle(id: number) {
    this.router.navigate([`/aritlces/${id}/detail`])

  }
}
