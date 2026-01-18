import { LazyLoadImage } from 'react-lazy-load-image-component';
import handIcon from '../../../assets/hand.png';
const profileImage = '/images/mee.PNG';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import s from './MainSection.module.scss';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <div className={s.greetingContainer}>
          <h2 className={s.title}>
            Hello!
          </h2>
          <img 
            src={handIcon} 
            className={s.handIcon} 
          />
        </div>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> Mikael Meander</strong>
        </h1>

        <div className={s.typewriter}>
          <Typewriter
            strings={[
              'UX-designer',
              'Driven',
              'Front-end developer',
              'Loves to learn new things',
            ]}
            wrapperClassName={s.typewriterInner}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <div className={s.spacer} />

      <LazyLoadImage
        alt="Photo of Mikael Meander"
        effect="blur"
        src={profileImage}
        wrapperClassName={s.profileImage}
        width="360"
        height="360"
      />

    </section>
  );
};

export default MainSection;
