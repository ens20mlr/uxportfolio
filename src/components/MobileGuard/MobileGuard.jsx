import { useEffect, useState } from 'react';
import s from './MobileGuard.module.scss';

const MOBILE_BREAKPOINT = 900; // välj typ 900px eller 768px

export default function MobileGuard({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <div className={s.backdrop}>
        <div className={s.modal}>
          <h2 className={s.title}>Desktop experience</h2>
          <p className={s.text}>
          This portfolio is currently optimized for desktop screens since I recently built it. On mobile, some layouts may
          look off or load slower.
          </p>

          <div className={s.hint}>
   
          </div>
        </div>
      </div>
    );
  }

  return children;
}
