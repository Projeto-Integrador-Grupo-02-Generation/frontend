import Usuario from "./Usuario";
import Categoria from "./Categoria";

export default interface produto {

    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    usuario?: Usuario;
    categoria?: Categoria

    data: Date;
}