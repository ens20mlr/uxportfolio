import s from './MainNavigation.module.scss';
import { useState } from 'react';
import Media from 'react-media';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Burger from '../Burger/Burger';
import BtnToggleTheme from '../../BtnToggleTheme/BtnToggleTheme';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop name */}
      <Link to="/" className={`${s.name} ${s.desktop}`}>
        Mikael Meander
      </Link>

      <nav className={s.desktop}>
        <NavLinks />
        <BtnToggleTheme />
      </nav>

      <Media query={{ maxWidth: 768 }}>
        {() => (
          <>
            <Burger onClick={toggleDrawer} />

            {/* Mobile name */}
            <Link to="/" className={`${s.name} ${s.mobile}`}>
              Mikael Meander
            </Link>

            <BtnToggleTheme className={s.mobile} />
          </>
        )}
      </Media>

      <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
        <nav className={s.navigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
    </>
  );
};

export default MainNavigation;
