import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../../model/user';
import { UserService } from '../../services/user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {

_id: string | null = null;

  public alertButtons = ['OK'];

  constructor(private alertController: AlertController, private activeRouter: ActivatedRoute
  // private userService: UserService
    ) { }

  user = new User();
  userService = new UserService();

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      // subHeader: 'Important message',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }
  getParam(){
    this._id =  this.activeRouter.snapshot.paramMap.get("id");
  //  this.userService.getUser(this._id).then(res => {this.user= <User>res;})
    }
    ngOnInit() {
    }
  save() {
 this.userService.add(this.user)
 .then(res => {
console.log(this.user);
    this.presentAlert("Aviso", "Cadastrado");
    
  })
.catch((err) =>{
console.log(err);
this.presentAlert("Erro", "Não cadastrado");
})

  }
}
