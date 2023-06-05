import {User} from "../model/user";
import {Injectable, inject} from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc} from '@angular/fire/firestore';
import { getDocs, query, getDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'

})

export class UserService {
    _http: any;
constructor () {}

private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
private userCollection = collection(this.firestore,'users');

add(user:User) {
return addDoc(this.userCollection, <User>{
     email: user.email,
     nome: user.nome,
     senha: user.senha,
     telefone: user.telefone
 })
}
async list (){
const result = await getDocs(query(this.userCollection));
    //const result = await getDocs(query(this.userCollection));
   return result.docs.map(doc=>({_id: doc.id, ...doc.data() }));
}

async getUser(id: string){
    const result = await getDoc(doc(this.firestore, 'users', id))
  //  return result.data
  return {_id: result.id, ...result.data()}
}
}


