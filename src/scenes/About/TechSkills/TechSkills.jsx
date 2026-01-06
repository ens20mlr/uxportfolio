import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiSwift } from '@react-icons/all-files/di/DiSwift';
import { SiExpo } from '@react-icons/all-files/si/SiExpo';
import { SiFirebase } from '@react-icons/all-files/si/SiFirebase';
import { SiJest } from '@react-icons/all-files/si/SiJest';
import { SiKotlin } from '@react-icons/all-files/si/SiKotlin';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiSocketDotIo } from '@react-icons/all-files/si/SiSocketDotIo';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiFigma } from '@react-icons/all-files/si/SiFigma';
import { SiAdobephotoshop } from '@react-icons/all-files/si/SiAdobephotoshop';
import { SiAdobeindesign } from '@react-icons/all-files/si/SiAdobeindesign';
import { DiJava } from '@react-icons/all-files/di/DiJava';
import { SiC } from '@react-icons/all-files/si/SiC';
import { SiCplusplus } from '@react-icons/all-files/si/SiCplusplus';


import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>
       <li className={s.techIcon}>
        <SiFigma />
      </li>
      <li className={s.techIcon}>
        <SiAdobephotoshop />
      </li>
      <li className={s.techIcon}>
        <SiAdobeindesign />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <SiC />
      </li>
      <li className={s.techIcon}>
        <SiCplusplus />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
    
      <li className={s.techIcon}>
        <SiFirebase />
      </li>
    
      <li className={s.techIcon}>
        <DiGit />
      </li>
  
    </ul>
  );
};

export default TechSkills;
