function Home() {

    return (
        <div className="flex justify-center min-h-full">
            <div className='container grid grid-cols-1 text-black'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                    <p className='text-xl'>Faça login para administrar sua conta.</p>

                    <div className="flex justify-around gap-4">
                        <button className='rounded bg-green-400 text-white py-2 px-4'>Fazer login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;