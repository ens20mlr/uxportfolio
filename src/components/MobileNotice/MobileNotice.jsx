import { useEffect, useState } from 'react';
import s from './MobileNotice.module.scss';

const BREAKPOINT = 900; // ändra om du vill (t.ex. 768)

const MobileNotice = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Om du vill att den ska komma tillbaka när man refreshar:
  // behåll bara state. Vill du att den ska "komma ihåg" att man stängt:
  useEffect(() => {
    const saved = localStorage.getItem('mobileNoticeDismissed');
    if (saved === 'true') setDismissed(true);
  }, []);

  const close = () => {
    setDismissed(true);
    localStorage.setItem('mobileNoticeDismissed', 'true');
  };

  if (!isSmall || dismissed) return null;

  return (
    <div className={s.backdrop} role="dialog" aria-modal="true">
      <div className={s.modal}>
        <div className={s.badge}>Heads up</div>
        <h2 className={s.title}>Desktop-first portfolio</h2>
        <p className={s.text}>
          This portfolio is currently optimized for desktop screens since I recently built it. On mobile, some layouts may
          look off or load slower.
        </p>
        <p className={s.text}>
          For the best experience, open this site on a computer.
        </p>

        <div className={s.actions}>
          <button className={s.primary} onClick={close}>
            Continue anyway
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNotice;
