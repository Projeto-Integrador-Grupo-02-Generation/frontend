import { useNavigate } from "react-router-dom";
import ListaProdutos from '../../components/produtos/listaProdutos/listaProdutos';

function Home() {

    let navigate = useNavigate();

    return (
        <div className="flex justify-center min-h-full">
            <div className='container grid grid-cols-1 text-black'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>

                    <ListaProdutos/>
                </div>
            </div>
        </div>
    );
}

export default Home;