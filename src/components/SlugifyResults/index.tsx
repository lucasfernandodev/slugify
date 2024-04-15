import {  IconEditCircle, IconTrash } from '@tabler/icons-react';
import style from './style.module.css';
import { FC, useState } from 'react';
import { slugData } from '../Slugify';
import { ButtonCopy } from '../ButtonCopy'; 
interface IProps {
  slugs: slugData[],
  deleteSlugi: (title: string) => void;
  toEdited: (title: string) => void;
}

export const SlugifyResults: FC<IProps> = ({ slugs, deleteSlugi, toEdited }) => {

  const [deleteMode, setDeleteMode] = useState(false)

  if (!slugs) return null

  function changeDeleteMode() {
    setDeleteMode(!deleteMode)
  }

  function deleteSlug(title: string) {
    deleteSlugi && deleteSlugi(title)
  }

  function handleEdited(title: string) {
    toEdited && toEdited(title)
  }

  return (
    <div className={style.container}>

      <div className={style.container__header}>
        <h2>Slugs</h2>
        <button onClick={changeDeleteMode}>
          {!deleteMode ? 'Editar lista' : 'Sair'}
        </button>
      </div>
      <ul className={style.container__content}>
        {slugs.length > 0 && slugs.map(({ slug, date, title }) => {
          return (
            <li key={date}>
              <span className={style.content}>{slug}</span>
              {deleteMode ? (
                <div className={style.group_actions}>
                  <button onClick={() => deleteSlug(title)}><IconTrash /></button>
                </div>
              ) : (
                <div className={style.group_actions}>
                  <button onClick={() => handleEdited(title)}><IconEditCircle /></button>
                  <ButtonCopy content={slug} />
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}