import { IconChevronsRight } from '@tabler/icons-react';
import { RootLayout } from '../../components/Layout/root';
import style from './style.module.css'

export const Contact = () => {
  return (
    <RootLayout>
      <div className={style.container}>
        <h1>Contato</h1>
        <p>Se tiver alguma dúvida, entre em contato conosco no repositório oficial do projeto no GitHub.</p>
        <button><span>Conhecer no Github</span> <IconChevronsRight /></button>
      </div>
    </RootLayout>
  );
}