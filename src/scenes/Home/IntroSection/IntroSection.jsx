import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';

import TiltedCard from '../../components/TiltedCard/TiltedCard';
import s from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span> MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm studying Master of Science in Interaction Design at Umeå University.
              <br />
              During my studies, I have learned a lot about user experience and design,
              <br />
              and my goal is to become a UX designer / front-end developer after graduation.
            </p>

            <p>
              My skills include{' '}
              <i>
                <b className={s.purple}>
                  Figma, React, React Native
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience with
              <br />
              third-party libraries, API integration, push notifications, and analytics.
            </p>

            <p>
              My main interests are building new
              <i>
                <b className={s.purple}> technologies and digital products</b>
              </i>
              .
            </p>
          </div>
        </div>

        {/* Bildkort */}
        <TiltedCard
          imageSrc="/images/seoul.png"
          altText="Seoul Marathon 2025"
          captionText="Seoul Marathon 2025"
          containerHeight="340px"
          containerWidth="340px"
          imageHeight="340px"
          imageWidth="340px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
        />
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect</span> with me
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
