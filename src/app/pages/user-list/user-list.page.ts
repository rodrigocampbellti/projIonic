import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../model/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  router: any;
  constructor(private userService: UserService ) {  }
  handleRefresh(event: any) {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 2000);
  }
users: User [] = [];

  ngOnInit() {
this.getList();
  }


getList(){
  this.userService.list().then(res => {
      this.users = <User[]>res;
})

}

editUser(_id: string){
  this.router.navigate(['/tabs/userForm']);
}
}



