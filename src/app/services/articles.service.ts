import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleResponse } from 'src/app/models/articles/article-response.interface';
import { ApiResponse } from 'src/app/models/common/api-response-interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'http://localhost:3000/api/articles'
  constructor(private http: HttpClient){}

  getAllArticles(): Observable<ApiResponse<ArticleResponse[]>>{
    const token =  localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json' ,
      'Authrization': token ? `Barer ${token}`: ''
    });

    return this.http.get<ApiResponse<ArticleResponse[]>>(`${this.apiUrl}`, { headers });
  }

  getArticleById(id: number): Observable<ApiResponse<ArticleResponse>> {
    const token =  localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authrization': token ? `Barer ${token}`: ''
    });
    
    return this.http.get<ApiResponse<ArticleResponse>>(`${this.apiUrl}/${id}`, { headers });
  }
}
