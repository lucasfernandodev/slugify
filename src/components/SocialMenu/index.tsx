import { FC, HTMLAttributes } from 'react';
import { Link } from '../../infra/Link';
import style from './style.module.css';
import { IconBrandDribbble, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

interface IProps extends HTMLAttributes<HTMLUListElement> { }

export const SocialMenu: FC<IProps> = ({ ...props }) => {
 
  return (
    <ul {...props} className={[style.menuLinks, props.className].join(" ")}>
      <li>
        <Link to="https://github.com/lucasfernandodev"><IconBrandGithub strokeWidth={1} /></Link>
      </li>
      <li>
        <Link to="https://www.instagram.com/lucasfernandodev/"><IconBrandInstagram strokeWidth={1} /></Link>
      </li>
      <li>
        <Link to="https://www.linkedin.com/in/frontlucasfernandodev"><IconBrandLinkedin strokeWidth={1} /></Link>
      </li>
      <li>
        <Link to="https://dribbble.com/lucasfernandodev"><IconBrandDribbble strokeWidth={1} /></Link>
      </li>
    </ul>
  )
}