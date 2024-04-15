import style from './style.module.css';
import { IconRefresh, IconWand } from '@tabler/icons-react';
import { FC, useState } from 'react';
import slugify from 'slugify';
import { slugData } from '../Slugify';



interface ISlugifyConfig {
  removeNumber: boolean;
  replacement: '-' | '_';
}

interface IProps {
  setStorage: (props: slugData) => void;
  config: ISlugifyConfig;
  changeConfig: (config: Partial<ISlugifyConfig> | null) => void;
  title: string;
  setTitle: (title: string) => void;
}

export const SlugifyInput: FC<IProps> = ({
  setStorage,
  config,
  changeConfig,
  title,
  setTitle
}) => {

  if (!config) return null;

  const [error, setError] = useState<string | null>(null);

  function validateInput(value: string) {
    if (!value || value === '' || value.length === 0) {
      setError('O campo de titulo não pode estar vazio.')
      return true
    } else {
      return false
    }
  }

  function handleReset(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setTitle('')
    changeConfig(null);
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setError(null)
    const isError = validateInput(title);

    if (!isError) {
      const slug = slugify(title, {
        replacement: config.replacement,
        remove: config.removeNumber ? /\d+/g : undefined
      })

      setStorage && setStorage({
        title,
        slug: slug,
        date: new Date().toString()
      })
      setTitle('')
    }
  }

  function toggleReplacement(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    if (input.checked) {
      changeConfig({
        replacement: input.value as "-" | '_'
      })
    }
  }


  function toggleOptionRemoveNumber() {
    changeConfig({ removeNumber: !config.removeNumber })
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }

  return (
    <form className={style.form} id="slugify-input" data-error={error !== null ? true : false}>
      <fieldset className={style.input_group}>
        <label htmlFor="input-title">
          <span>Seu texto </span>
          (títulos de artigo, título de tutorial ou qualquer título)
        </label>
        <div className={style.wrapper_input}>
          <input
            value={title}
            onChange={handleInput}
            type="text"
            placeholder='Cole seu texto aqui'
            id="input-title"
          />
        </div>
      </fieldset>
      <div className={style.group__options}>
        <fieldset className={style.inputs_group__radio}>
          <input
            onChange={toggleReplacement}
            checked={config.replacement === '-' ? true : false}
            type="radio"
            value="-"
            name="separate-string"
            id="option-separate-string-trace"
          />
          <label htmlFor="option-separate-string-trace">Separar com traço (-)</label>

          <input
            onChange={toggleReplacement}
            checked={config.replacement === '_' ? true : false}
            type="radio"
            value="_"
            name="separate-string"
            id="option-separate-string-underline"
          />
          <label htmlFor="option-separate-string-underline">Separar com underline (_)</label>
        </fieldset>
        <fieldset className={style.input_group__checkbox}>
          <input onChange={toggleOptionRemoveNumber} checked={config.removeNumber} type="checkbox" name="remover-numbers" id="option-remove-number" />
          <label htmlFor="option-remove-number">Remover números</label>
        </fieldset>
      </div>
      {error && <p className={style.errorMsg}> {error} </p>}
      <div className={style.group_buttons}>
        <button onClick={handleSubmit}>
          <IconWand width={20} height={20} /> <span>Slugify</span>
        </button>
        <button onClick={handleReset}>
          <IconRefresh width={20} height={20} /><span>Resetar</span>
        </button>
      </div>
    </form>
  )
}