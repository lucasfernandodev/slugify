import { WaveIlustration } from '../../../assets/Wave';
import { SocialMenu } from '../../SocialMenu';
import style from './style.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <WaveIlustration className={style.customBorder}/>
      <p>Desenvolvido por Lucas Fernando.</p>
      <SocialMenu />
    </footer>
  )
}