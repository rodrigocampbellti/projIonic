import { v4 as uuid } from 'uuid';

export class Produto {
    _id: string = uuid();
    nome:string = "";
    categoria: string = "";
    descricao: string = "";
    quant: number = 0;
    valor:number = 0;
    foto:string="";
    ativo:boolean = true;
}
