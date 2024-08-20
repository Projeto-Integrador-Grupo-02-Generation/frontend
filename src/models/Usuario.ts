import produto from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  produtos?: produto[];
}