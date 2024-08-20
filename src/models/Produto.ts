import Usuario from "./Usuario";
import Categoria from "./Categoria";

export default interface produto {

    id: number;
    nome: string;
    descricao: string;
    preco: number;
    estoque: number;   
    usuario: Usuario|null;
    categoria?: Categoria|null;
}