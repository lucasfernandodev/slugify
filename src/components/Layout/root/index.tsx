import { FC } from 'react';
import { CircleIlustration } from '../../../assets/Circle';
import { Header } from '../Header';
import style from './style.module.css';
import { Footer } from '../Footer';
import { CircleMobile } from '../../../assets/CircleMobile';

interface Props {
  children: React.ReactNode
}

export const RootLayout: FC<Props> = ({ children }) => {
  return (
    <main className={style.layout}>
      <Header />
      <CircleIlustration className={style.ilustration} />
      <CircleMobile className={style.ilustrationMobile} />
      <div className={style.content}>
        {children}
      </div>
      <Footer />
    </main>
  )
}