import LogoGit from '../../assets/github_icon_white.png';
import LogoLink from '../../assets/linkedin_icon_white.png';

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-deep-sea to-shallow-sea text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">KELP | Copyright: </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-4">
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
              <img src={LogoGit} alt="GitHub Logo" className="w-8 h-8" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity duration-300">
              <img src={LogoLink} alt="LinkedIn Logo" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;