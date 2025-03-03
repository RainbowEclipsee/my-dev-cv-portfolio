import gitHubIcon from './gitHub-black.svg'

interface BtnGitHubProps {
  link: string
}

const BtnGitHub: React.FC<BtnGitHubProps> = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="GitHub icon" />
      GitHub repo
    </a>
  )
}

export default BtnGitHub
