import './style.css'

interface PlaceOfWorkProps {
  title: string
  workTime: string
  img: string
  info: string
  stack: string
  website: string
  index: number
}

const PlaceOfWork: React.FC<PlaceOfWorkProps> = ({ title, workTime, img, info, stack, website }) => {
  return (
    <li className="career-item">
      <div className="career-item__image">
        <img src={img} alt={title} />
        <p className="career-item__work-time">{workTime}</p>
      </div>
      <div className="career-item__content">
        <h3 className="career-item__title">{title}</h3>
        <pre className="company__info">{info}</pre>
        <p className='stack'><strong>Stack: {stack}</strong></p>
        <a
          href={website}
          className="career-item__link"
          target="_blank"
          rel="noreferrer"
        >
          Visit Website
        </a>
      </div>
    </li>
  )
}

export default PlaceOfWork
