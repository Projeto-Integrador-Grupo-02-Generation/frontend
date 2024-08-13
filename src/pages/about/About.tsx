import DevCard from "../../components/devcard/DevCard";

function About() {
    return (
        <div className='flex justify-center items-center min-h-full min-w-full'>

            <div className='flex flex-col'>
                <div className='px-16 py-5 text-justify text-wrap min-w-96 max-w-screen-2xl mx-auto'>
                    <h1 className='text-5xl font-bold py-10 text-center'>Sobre o Kelp</h1>
                    <p className='text-2xl'>
                        O Kelp é uma plataforma de Marketplace criada com o objetivo de encorajar
                        a utilização de energia limpa, por meio de compra e venda de produtos energeticamente sustentáveis.
                    </p>
                    <p className='text-2xl'>
                        Também dedicamos nossas mídias sociais à promoção do engajamento em relação a mudanças climáticas,
                        E destinamos 5% dos lucros obtidos na plataforma à ações de prevenção e mitigação de danos causados
                        pelas mudanças climáticas.
                    </p>
                    <p className='text-2xl'>
                        {'Acreditamos que esta é uma forma de contribuir para a '}
                        <a
                            className='text-blue-600 hover:underline visited:text-purple-600'
                            href='https://brasil.un.org/pt-br/sdgs/13'
                            target="_blank">ODS 13
                        </a>
                        {' da ONU, e assim, ajudar a construir um mundo e um futuro melhor.'}
                    </p>
                </div>

                <div className='max-w-screen-2xl px-16 mx-auto'>
                    <h2 className='text-4xl font-bold text-center py-10'>Sobre os desenvolvedores</h2>
                    <div className='flex flex-row flex-wrap justify-center'>
                        <DevCard
                            image='https://github.com/NotofTroy.png'
                            name='Helena Fonseca'
                            description='Oi, meu nome é Helena e tenho experiência com desenvolvimento FullStack 
                            com o Python, SQL e MongoDB, com o React e TypeScript no Front.
                            Também estou aprendendo novas tecnologias, como o Java, e o Kelp é um dos resultados deste aprendizado.'
                            linkedin='https://www.linkedin.com/in/helena-fonseca-a03976156/'
                            github='https://github.com/NotofTroy'
                        />

                        <DevCard
                            image='https://github.com/olucasgr.png'
                            name='Lucas Rodrigues'
                            description='Olá, Lucas aqui!
                            Como Desenvolvedor FullStack, adoro me desafiar e encontrar soluções criativas para problemas através 
                            da programação. 
                            Estou sempre em busca de aprender algo novo e melhorar minhas habilidades. 
                            Trabalho com tecnologias como Java e React, e estou animado para crescer cada vez mais nessa jornada. '
                            linkedin='https://www.linkedin.com/in/lucasrodd/'
                            github='https://github.com/olucasgr'
                            whatsapp='https://wa.me/5521986959291'
                        />

                        <DevCard
                            image='https://github.com/matheugenio.png'
                            name='Matheus Eugenio'
                            description='Olá, meu nome é Matheus! 
                            Sou Desenvolvedor recém formado em Sistemas de Informação e com experiência em Java, Javascript, Spring, 
                            React, SQL e estou sempre aprendendo novas tecnologias. 
                            Entre em contato comigo nos links abaixo.'
                            linkedin='https://www.linkedin.com/in/matheus-eugenio-dev/'
                            github='https://github.com/matheugenio'
                            whatsapp='https://wa.me/5521979248935'
                        />

                        <DevCard
                            image='https://github.com/RicardoFerreiraa.png'
                            name='Ricardo Ferreira'
                            description='Atualmente cursando um Bootcamp de Desenvolvedor Full Stack Mobile na Generation Brasil 
                            e graduando em Sistemas de Informação pela Estácio de Sá. 
                            Após uma extensa experiência no setor varejista, decidi seguir minha paixão por tecnologia e desenvolvimento de software.
                            Minhas habilidades incluem linguagens de programação como Java, Python, C, HTML5, CSS, JavaScript, PHP.'
                            linkedin='https://www.linkedin.com/in/ricardo-silva-ferreira-52b6928b/'
                            github='https://github.com/RicardoFerreiraa'
                        />

                        <DevCard
                            image='https://github.com/yasmin-fribeiro.png'
                            name='Yasmin Ribeiro'
                            description='Sou uma profissional de TI que atua como analista de sistemas há 4 anos.
                            Atualmente estou estudando e desenvolvendo minhas habilidades em programação através do 
                            Bootcamp Web Full Stack (Java com React) da Generation Brasil.'
                            linkedin='https://www.linkedin.com/in/yasmin-de-fran%C3%A7a-ribeiro-2218b138/'
                            github='https://github.com/yasmin-fribeiro'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;