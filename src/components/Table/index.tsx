import style from "./style.module.css";

export const Table = () => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Titulos</th>
          <th>Slugs amigáveis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Como fazer uma torta de maçã</td>
          <td>como-fazer-uma-torta-de-maca</td>
        </tr>
        <tr>
          <td>Dicas para uma rotina saudável</td>
          <td>dicas-para-uma-rotina-saudavel</td>
        </tr>
        <tr>
          <td>O guia definitivo de programação em Python</td>
          <td>o-guia-definitivo-de-programacao-em-python</td>
        </tr>
        <tr>
          <td>Os benefícios da meditação</td>
          <td>os-beneficios-da-meditacao</td>
        </tr>
        <tr>
          <td>Receitas vegetarianas fáceis</td>
          <td>receitas-vegetarianas-faceis</td>
        </tr>
      </tbody>
    </table>
  )
}