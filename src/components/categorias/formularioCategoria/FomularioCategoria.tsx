import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { toastAlerta } from '../../../util/toastAlerta';

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                });

                toastAlerta('Categoria atualizada com sucesso!', 'sucesso');
                retornar();

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente.', 'erro');
                    handleLogout();
                } else {
                    toastAlerta('Erro ao atualizar a Categoria. Tente novamente.', 'erro');
                }
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                });

                toastAlerta('Categoria cadastrada com sucesso', 'sucesso');
                retornar();

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente.', 'erro');
                    handleLogout();
                } else {
                    toastAlerta('Erro ao cadastrar a Categoria. Tente novamente.', 'erro');
                }
            }
        }
    }

    function retornar() {
        navigate("/categorias");
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado.', 'erro');
            navigate('/login');
        }
    }, [token]);

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
            <h1 className="text-4xl text-center mb-8 font-bold text-gray-700  from-deep-sea to-shallow-sea bg-clip-text ">
                {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
            </h1>

            <form className="w-full max-w-md flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-gray-700 font-semibold mb-1">Nome da categoria</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2 bg-slate-100 focus:outline-none focus:border-indigo-500 transition duration-300"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={5}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-gray-700 font-semibold mb-1">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2 bg-slate-100 focus:outline-none focus:border-indigo-500 transition duration-300"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={5}
                    />
                </div>
                <button
                    className="bg-gradient-to-r from-deep-sea to-shallow-sea text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:from-shallow-sea hover:to-deep-sea w-1/2 mx-auto"
                    type="submit"
                >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;