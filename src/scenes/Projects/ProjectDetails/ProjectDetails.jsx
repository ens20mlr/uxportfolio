import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import BaseLayout from '../../../layouts/BaseLayout/BaseLayout';
import projects from '../../../data/projects';
import s from './ProjectDetails.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../../../components/UIElements/Button/Button';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';

const ProjectDetails = () => {
  const { id } = useParams();

  const project = useMemo(() => projects.find((p) => p.id === id), [id]);

  if (!project) {
    return (
      <BaseLayout>
        <div className={s.content}>
          <h1>Project not found</h1>
          <Link to="/projects" className={s.backLink}>
            ← Back to projects
          </Link>
        </div>
      </BaseLayout>
    );
  }

  const {
    title,
    fullDescription,
    technologies,
    links,
    image,
    heroImage,
    inlineImages,
  } = project;

  const topImage = heroImage ?? image;

  // Gör om texten till "blocks" (stycken eller image-markers)
  const blocks = String(fullDescription || '')
    .split('\n')
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <BaseLayout>
      <div className={s.content}>
        <Link to="/projects" className={s.backLink}>
          ← Back to projects
        </Link>

        <div className={s.hero}>
          <LazyLoadImage
            src={topImage?.src}
            placeholderSrc={topImage?.placeholderSrc}
            alt={title}
            effect="blur"
            className={s.heroImage}
          />
        </div>

        <div className={s.body}>
          <h1 className={s.title}>{title}</h1>

          {/* Rendera stycken + inline-bilder */}
          {blocks.map((block, i) => {
            // Matchar exakt: [[IMAGE:filmdle-stats]]
            const match = block.match(/^\[\[IMAGE:(.+?)\]\]$/);

            if (match) {
              const key = match[1];
              const img = inlineImages?.[key];

              // Om nyckeln inte finns: rendera inget (eller gör en fallback-text om du vill)
              if (!img?.src) return null;

              return (
                <figure key={`img-${i}`} className={s.inlineImage}>
                  <img src={img.src} alt={img.alt || ''} />
                  {img.caption && <figcaption>{img.caption}</figcaption>}
                </figure>
              );
            }

            return (
              <p key={`p-${i}`} className={s.paragraph}>
                {block}
              </p>
            );
          })}

          {!!technologies?.length && (
            <div className={s.tech}>
              {technologies.map((t, i) => (
                <span key={i} className={s.techTag}>
                  {t}
                </span>
              ))}
            </div>
          )}

          {(links?.site || links?.repo) && (
            <div className={s.links}>
              {links?.site && (
                <Button href={links.site} target="_blank" className="primary">
                  <BiLinkExternal /> &nbsp; View project
                </Button>
              )}
              {links?.repo && (
                <Button href={links.repo} target="_blank" className="primary">
                  <BiLinkExternal /> &nbsp; Repository
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProjectDetails;
