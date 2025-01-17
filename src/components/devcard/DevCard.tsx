import LogoLinkedin from '../../assets/linkedin_icon.png'
import LogoGithub from '../../assets/github_icon.png'
import LogoWhatsapp from '../../assets/whatsapp_icon.png'

interface DevCardProps {
    image: string
    name: string
    description: string
    linkedin: string
    github: string
    whatsapp?: string | null
}

function DevCard(props: DevCardProps) {
    

    return (
        <>
            <div className='bg-white shadow-md shadow-emphasis-blue
            flex flex-col
            text-center text-wrap
            items-center max-w-96 m-5 rounded-2xl'>
                <img src={props.image}
                    className='size-40 rounded-full mt-5'>
                </img>
                <h2 className='text-2xl font-bold text-center m-5'>{props.name}</h2>
                <p className='text-xl mx-5'>{props.description}</p>
                <div className='flex items-end h-full my-5 space-x-1'>
                    <a href={props.github} target="_blank">
                        <img className='size-12' src={LogoGithub}></img>
                    </a>
                    <a href={props.linkedin} target="_blank">
                        <img className='size-12' src={LogoLinkedin}></img>
                    </a>
                    {props.whatsapp
                        ? <a href={props.whatsapp} target="_blank">
                            <img className='size-12' src={LogoWhatsapp}></img></a>
                        : <></>}
                </div>
            </div>
        </>
    )
}

export default DevCard;