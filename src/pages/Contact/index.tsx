import { IconChevronsRight } from '@tabler/icons-react';
import { RootLayout } from '../../components/Layout/root';
import style from './style.module.css'
import { Link } from '../../infra/Link';

export const Contact = () => {
  return (
    <RootLayout>
      <div className={style.container}>
        <h1>Contato</h1>
        <p>Se tiver alguma dúvida, entre em contato conosco no repositório oficial do projeto no GitHub.</p>
        <Link target='_blank' to="https://github.com/lucasfernandodev/slugify"><span>Conhecer no Github</span> <IconChevronsRight /></Link>
      </div>
    </RootLayout>
  );
}