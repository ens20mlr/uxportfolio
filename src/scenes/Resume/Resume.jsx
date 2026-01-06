import { useRef } from 'react';
import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';
import cvImage from '/images/cv.png'; // <-- din PNG här
import { LazyLoadImage } from 'react-lazy-load-image-component';

const resumeLink = cvImage; // Kan fortfarande använda samma länk för nedladdning

const Resume = () => {
  const imgWrapper = useRef(null);

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.png</span>
        </Button>

        <div className={s.pdfWrapper} ref={imgWrapper}>
          <LazyLoadImage
            src={cvImage}
            alt="My Resume"
            effect="blur"
            width="100%"
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
