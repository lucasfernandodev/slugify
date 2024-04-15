import { IconChevronsRight } from '@tabler/icons-react';
import { RootLayout } from '../../components/Layout/root';
import style from './style.module.css'

export const About = () => {
  return (
    <RootLayout>
      <div className={style.container}>
        <h1>Sobre o gerador de slugify</h1>
        <p>O gerador de slugify é uma ferramenta simplista, porém poderosa, que é de grande ajuda na hora de criar slugs amigáveis para suas postagens. Se quiser saber como funciona, dê uma olhada em nosso código no GitHub.</p>
        <button><span>Conhecer no Github</span> <IconChevronsRight /></button>
      </div>
    </RootLayout>
  );
}