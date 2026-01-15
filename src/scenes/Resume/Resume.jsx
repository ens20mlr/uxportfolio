import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';

const resumeLink = '/images/CV.MikaelMeander.pdf'; // ligger i public/images/

const Resume = () => {
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
          <span className={s.filename}>.pdf</span>
        </Button>

        <div className={s.pdfWrapper}>
          {/* PDF preview */}
          <iframe
            className={s.pdf}
            src={`${resumeLink}#view=FitH`}
            title="Mikael Meander Resume"
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
