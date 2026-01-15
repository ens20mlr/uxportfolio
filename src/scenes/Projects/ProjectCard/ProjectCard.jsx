import s from './ProjectCard.module.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ id, image, title, shortDescription }) => {
  return (
    <li className={s.card}>
      <Link to={`/project/${id}`} className={s.cardWrapper}>
        <LazyLoadImage
          alt={title}
          effect="blur"
          src={image.src}
          width="100%"
          style={{ minHeight: '10rem' }}
          placeholderSrc={image.placeholderSrc}
        />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{shortDescription}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
