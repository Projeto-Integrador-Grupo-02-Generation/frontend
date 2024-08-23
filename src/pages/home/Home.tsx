import ListaProdutos from '../../components/produtos/listaProdutos/listaProdutos';

function Home() {

    

    return (
        <div className="flex justify-center min-h-full">
            <div className="px-16 py-5 text-justify text-wrap min-w-96 max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center justify-center py-5">
                    <h2 className='text-5xl font-bold py-10'>Seja bem vinde!</h2>

                    <ListaProdutos showAddButton={false} />
                </div>
            </div>
        </div>
    );
}

export default Home;