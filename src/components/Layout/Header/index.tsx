import { useLocation } from 'react-router-dom';
import { Link } from '../../../infra/Link';
import style from './style.module.css';
import { useEffect, useRef, useState } from 'react';
import { DarkCircleIlustration } from '../../../assets/dark-circle';
import { SocialMenu } from '../../SocialMenu';
import { IconMenu2, IconX } from '@tabler/icons-react';

export const Header = () => {

  const location = useLocation();
  const { pathname } = location;
  const ulRef = useRef<HTMLUListElement>(null)

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (ulRef.current) {
      const activeItem = ulRef.current?.querySelector(`a[href="${pathname}"]`);

      if (activeItem) {
        activeItem.setAttribute("data-active", "true")
      }
    }
  }, [ulRef, pathname])
  
  function toggleVisibility(){
    setOpenMenu(!openMenu)
  }

  return (
    <header className={style.header} data-open={openMenu}>
      <div className={style.brand}>
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
          <h3>Slugify</h3>
        </Link>
      </div>

      <nav className={style.nav} data-open={openMenu}>
        <ul ref={ulRef} className={style.menu}>
          <li>
            <Link to="/">Gerador de slug</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <SocialMenu className={style.socialMenu} id={style.social}/>
        <DarkCircleIlustration className={style.nav__ilustration} />
      </nav>

      <button onClick={toggleVisibility} className={style.toggleMenu}>
        {!openMenu ? <IconMenu2 /> : <IconX />}
      </button>
    </header>
  )
}