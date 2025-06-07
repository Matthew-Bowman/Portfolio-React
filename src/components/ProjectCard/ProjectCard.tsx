import {type FC} from 'react'
import SkillIcon from '../SkillIcon/SkillIcon';
import type { ProjectType } from '../../data/projects';


const ProjectCard: FC<ProjectType> = ({
  title,
  description,
  icons,
  thumbnail,
  showLink,
  repoLink,
}) => {
  return (
    <div className="card h-100 shadow">
      {/* Conditionally render image if provided */}
      {thumbnail && <img src={thumbnail.src} alt={thumbnail.alt || title} width={thumbnail.width} height={thumbnail.height} className="card-img-top img-fluid border-bottom" />}
      
      <div className="card-body d-flex flex-column h-100">
        <div className="mb-2 d-flex gap-2 justify-content-center flex-wrap">
          {icons.map((icon, idx) => (
            <SkillIcon key={idx} {...icon} size={'small'} />
          ))}
        </div>

        <h1 className="card-title">{title}</h1>
        <p className="card-text">{description}</p>

        <div className="mt-auto d-flex gap-2 flex-wrap justify-content-center">
          {showLink && (
            <a href={showLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Show Me
            </a>
          )}

          {repoLink && (
            <a href={repoLink} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;