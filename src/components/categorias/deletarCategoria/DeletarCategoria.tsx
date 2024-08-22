import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, por favor logue novamente.', 'erro');
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'erro');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate('/categorias');
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token,
                },
            });

            toastAlerta('Categoria apagada com sucesso', 'sucesso');
        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro');
        }

        retornar();
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-white">
            <h1 className="text-4xl font-bold text-gray-700 mb-6">
                Deletar Categoria
            </h1>

            <p className="text-lg text-gray-600 mb-6 text-center">
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>

            <div className="w-full max-w-md bg-white border rounded-lg shadow-lg overflow-hidden">
                <header className="py-4 px-6 bg-gradient-to-r from-deep-sea to-shallow-sea text-white font-bold text-2xl">
                    {categoria.nome}
                </header>
                <p className="p-6 text-xl text-gray-700 bg-slate-100 h-full">
                    {categoria.descricao}
                </p>
                <div className="flex">
                    <button
                        className="flex-1 py-2 bg-gradient-to-r from-deep-sea to-shallow-sea text-white font-bold transition-all duration-300 hover:from-shallow-sea hover:to-deep-sea"
                        onClick={deletarCategoria}
                    >
                        Sim
                    </button>
                    <button
                        className="flex-1 py-2 bg-red-500 text-white font-bold transition-all duration-300 hover:bg-red-600"
                        onClick={retornar}
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;