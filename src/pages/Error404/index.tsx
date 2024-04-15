import { IconChevronsRight } from '@tabler/icons-react';
import { RootLayout } from '../../components/Layout/root';
import style from './style.module.css'

export const Error404 = () => {
  return (
    <RootLayout>
       <div className={style.container}>
        <h1>Nenhuma página encontrada!</h1>
        <button><span>Ir para página inicial</span> <IconChevronsRight /></button>
      </div>
    </RootLayout>
  );
}