import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { produto } from '../produto';

@Component({
  selector: 'app-tabela-produto',
  templateUrl: './tabela-produto.component.html',
  styleUrls: ['./tabela-produto.component.css']
})
export class TabelaProdutoComponent implements OnInit {
 
 produtos : produto[] = [];
  constructor(private ProdutoService: ProdutoService)
  {

  }
  ngOnInit(): void {
    this.loadProduto();
    
  }
  loadProduto() {
    
  }

}
