import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import { projects, type Project } from '../helpers/projectsList'

const ProjectP: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project: Project | undefined = projects[Number(id)]

  if (!project) {
    return (
      <div className="error-container">
        <div className="error-message">Проект не найден</div>
        <div>Проект не найден</div>
      </div>
    )
  }

  return (
    <main className="project-details">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          {project.gitHubLink && (
            <BtnGitHub
              link={project.gitHubLink}
              text={project.gitHubLink.includes('github') ? 'GitHub repo' : 'Visit site'}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default ProjectP
