import { Produto } from '../model/produto';
import {Injectable, inject} from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc} from '@angular/fire/firestore';
import { getDocs, query, getDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  _http: any;
constructor () {}

private firestore: Firestore = inject(Firestore); 
private prodCollection = collection(this.firestore,'products');

add(product:Produto) {
return addDoc(this.prodCollection, <Produto>{
  nome: product.nome,
  categoria: product.categoria,
     descricao: product.descricao,
     quant: product.quant,
     valor: product.valor,
     foto: product.foto,
     ativo: product.ativo
 })
}
async list (){
const result = await getDocs(query(this.prodCollection));
   return result.docs.map(doc=>({_id: doc.id, ...doc.data() }));
}

async getProd(id: string){
    const result = await getDoc(doc(this.firestore, 'products', id))
  //  return result.data
  return {_id: result.id, ...result.data()}
}
}