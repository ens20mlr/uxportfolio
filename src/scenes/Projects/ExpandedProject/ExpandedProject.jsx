// src/scenes/Projects/ExpandedProject/ExpandedProject.jsx
import s from './ExpandedProject.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';
import Button from '../../../components/UIElements/Button/Button';

const ExpandedProject = ({ project }) => {
  if (!project) return null; // Säkerhet, rendera inget om project saknas

  const { image, title, fullDescription, technologies, links } = project;

  return (
    <div className={s.expandedWrapper}>
      {/* Bild på toppen */}
      <LazyLoadImage
        src={image.src}
        alt={title}
        effect="blur"
        className={s.image}
        placeholderSrc={image.placeholderSrc}
      />

      {/* Projektinfo */}
      <div className={s.info}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{fullDescription}</p>

        {/* Teknologier */}
        <div className={s.technologies}>
          {technologies?.map((tech, i) => (
            <span key={i} className={s.tech}>
              {tech}
            </span>
          ))}
        </div>

        {/* Länkar */}
        <div className={s.links}>
          {links?.site && (
            <Button href={links.site} target="_blank" className="primary">
              <BiLinkExternal /> &nbsp; View project
            </Button>
          )}
          {links?.repo && (
            <Button href={links.repo} target="_blank" className="primary">
              <BiLinkExternal /> &nbsp; Know more
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandedProject;
