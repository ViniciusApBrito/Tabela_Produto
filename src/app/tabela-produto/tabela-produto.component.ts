import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tabela-produto',
  templateUrl: './tabela-produto.component.html',
  styleUrls: ['./tabela-produto.component.css']
})
export class TabelaProdutoComponent {
  constructor(private ProdutoService: ProdutoService){}

}
