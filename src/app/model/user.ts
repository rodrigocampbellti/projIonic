import { v4 as uuid } from 'uuid';
export class User {
    _id: string = uuid();
    nome:string = "";
    email:string = "";
    senha:string="";
    telefone:string="";
    ativo:boolean=true;
}

