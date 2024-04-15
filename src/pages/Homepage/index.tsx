import { IconChevronsRight } from '@tabler/icons-react';
import { RootLayout } from '../../components/Layout/root';
import style from './style.module.css'
import { Slugify } from '../../components/Slugify';
import { Table } from '../../components/Table';
import { Link } from '../../infra/Link';

export const Homepage = () => {
  return (
    <RootLayout>
      <section className={style.pageApresentation}>
        <h1 className={style.title}>
          Transforme títulos em slugs amigáveis.
        </h1>
        <p className={style.desc}>
          Melhore o seo das suas publicações online, transformando títulos em slugs amigáveis tanto para o Google quanto para seus usuários.
        </p>
      </section>

      <section className={style.pageActions}>
        <Slugify />
      </section>

      <section className={style.section_content}>
        <h2>O que é uma slug?</h2>
        <p>Uma slug é um pedaço de texto que descreve de forma concisa e amigável o conteúdo de uma página da web. Geralmente é usada para otimizar a indexação e a pesquisa em sites, proporcionando uma URL mais amigável e compreensível para os usuários e motores de busca.</p>
        <Link target="_blank" to="https://en.wikipedia.org/wiki/Clean_URL#Slug"><span>Continuar lendo</span> <IconChevronsRight /></Link>
      </section>

      <section className={[style.section_content, style.pageExemple].join(" ")}>
        <h2>Exemplos de slugify</h2>
        <p>Um bom slug é essencial não apenas para os mecanismos de busca, pois valoriza o site e melhora seu ranqueamento, mas também para auxiliar novos usuários a descobrir seu conteúdo.</p>
        <div className={style.container_table}>
         <Table />
        </div>
      </section>

      <section className={style.section_content}>
        <h2>Blog</h2>
        <p>Se você está interessado em aprender mais sobre SEO ou desenvolvimento web, não deixe de visitar o nosso site. Lá, você encontrará uma riqueza de informações sobre esses tópicos e muito mais.</p>
        <Link target="_blank" to="https://blog.lucasfernando.tech"><span>Conhecer agora</span><IconChevronsRight /></Link>
      </section>
    </RootLayout>
  );
}