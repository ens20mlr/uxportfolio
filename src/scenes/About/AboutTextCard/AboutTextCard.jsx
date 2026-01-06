import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
          
      Hi! I am <span className={s.purple}>Mikael Meander,</span>
      <br />
      a motivated Master’s student in Interaction Design <br /> at Umeå University, currently based in <span className={s.purple}>Sweden.</span>
      <br />
      <br />
      I am a happy and outgoing, with a passion for learning <br /> new skills and collaborating with others.
      <br />
      <br />
      In my free time, I enjoy exploring  <br />nature and traveling to new places.
      <br />
      <br />
      Beyond UX design, my hobbies include:
    </p>


      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Sport
        </li>
        <li className={s.aboutActivity}>
          - spending time with family and friends
        </li>
        <li className={s.aboutActivity}>
          - Travelling
        </li>
        <li className={s.aboutActivity}>
          - Photographing
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
