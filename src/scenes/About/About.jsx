import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import BounceCards from '../components/BounceCards';

const About = () => {
  const images = [
    '/images/myself.webp',
    '/images/img1.webp',
    '/images/img2.webp',
    '/images/me.webp',
    '/images/img7.webp',
  ];

  const transformStyles = [
    'rotate(6deg) translate(-140px)',
    'rotate(2deg) translate(-70px)',
    'rotate(-4deg)',
    'rotate(3deg) translate(70px)',
    'rotate(-6deg) translate(140px)',
  ];

  return (
    <BaseLayout>
      <div className={s.content}>
        {/* About sektion */}
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Learn More <b className={s.purple}>About Me</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <BounceCards
              images={images}
              transformStyles={transformStyles}
              containerWidth={400}
              containerHeight={400}
              enableHover={true}
            />
          </div>
        </div>

        {/* Skills */}
        <h2 className={s.skills}>
          My <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />
 
       {/*
<h2 className={s.githubActivity}>
  My <b className={s.purple}>Photos</b>
</h2>

<div className={s.githubGallery}>
  <GithubActivity />
</div>
*/}

      </div>
    </BaseLayout>
  );
};

export default About;
