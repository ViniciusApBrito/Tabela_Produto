import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { produto } from './produto';



@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http : HttpClient) { }

  getProduto(): Observable<produto[]>{
    let url = "http://localhost:3000/produto";
    return this.http.get<produto[]>(url)

  }
}
