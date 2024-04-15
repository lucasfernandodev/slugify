import { IconChevronsRight } from '@tabler/icons-react';
import { RootLayout } from '../../components/Layout/root';
import style from './style.module.css'
import { Link } from '../../infra/Link';

export const About = () => {
  return (
    <RootLayout>
      <div className={style.container}>
        <h1>Sobre o gerador de slugify</h1>
        <p>O gerador de slugify é uma ferramenta simplista, porém poderosa, que é de grande ajuda na hora de criar slugs amigáveis para suas postagens. Se quiser saber como funciona, dê uma olhada em nosso código no GitHub.</p>
        <Link target='_blank' to="https://github.com/lucasfernandodev/slugify"><span>Conhecer no Github</span> <IconChevronsRight /></Link>
      </div>
    </RootLayout>
  );
}