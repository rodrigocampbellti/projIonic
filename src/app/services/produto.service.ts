import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  add(produto: Produto){
    console.log("salvo");
    
    
}
}