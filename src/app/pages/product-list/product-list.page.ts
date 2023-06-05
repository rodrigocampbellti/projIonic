import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import {ProdutoService} from '../../services/produto.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {


  constructor(private produtoService: ProdutoService) { }
  handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    }

  ngOnInit() {
  }
  getList(){
    this.produtoService.list().then(res => {
        this.product = <Produto[]>res;
    }
  }
}
showProd(_id: string){
  this.router.navigate(['/tabs/productForm']);}

  
