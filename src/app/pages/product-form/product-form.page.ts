import { Component, OnInit } from '@angular/core';
import {Produto} from '../../model/produto';
import { ActivatedRoute } from '@angular/router';
import {ProdutoService} from '../../services/produto.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {

 product = new Produto ();

 prodService = new ProdutoService();

  constructor(private alertController: AlertController, private activeRouter: ActivatedRoute) { }

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      message: texto,
      buttons: ['OK']
    });
  }

  ngOnInit() {
  }
  save() {
    this.prodService.add(this.product)
    .then(res => {
   console.log(this.product);
       this.presentAlert("Aviso", "Cadastrado");
       
     })
   .catch((err: any) =>{
   console.log(err);
   this.presentAlert("Erro", "Não cadastrado");
   })
   
     }
}
