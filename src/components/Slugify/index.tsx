import { useState } from 'react';
import { SlugifyInput } from '../SlugifyInput';
import { SlugifyResults } from '../SlugifyResults';
import { useLocalstorage } from '../../hooks/useLocalstorage';

export interface slugData {
  title: string;
  slug: string;
  date: string;
}

interface ISlugifyConfig {
  removeNumber: boolean;
  replacement: '-' | '_';
}


export const Slugify = () => {

  const configDefault: ISlugifyConfig = {
    removeNumber: false,
    replacement: '-'
  }

  const [title, setTitle] = useState('');
  const [config, setConfig] = useLocalstorage<ISlugifyConfig>('config', { ...configDefault });
  const [result, setResult] = useLocalstorage<slugData[]>('results',[] as slugData[])

  function AddNewSlugify({ title, slug, date }: slugData) {
    if (result.length > 0) {
      setResult(results => ([...results, {
        title,
        slug,
        date
      }]))
    } else {
      setResult([{
        title,
        slug,
        date
      }])
    }
  }

  function deleteSlugify(title: string) {
    const toRemovedIndex = result.findIndex(data => data.title === title);
    if (toRemovedIndex !== -1) {
      const newSlugs = result;
      newSlugs.splice(toRemovedIndex, 1);
      setResult(() => ([...newSlugs]))
    }
  }

  function toEdited(title: string) {
    setTitle(title);
    const form = document.querySelector('#slugify-input') as HTMLElement
    const inputTitle = document.querySelector('#input-title') as HTMLElement
    form?.scrollIntoView()
    inputTitle.focus()
  }

  function changeConfig(config: Partial<ISlugifyConfig> | null) {
    setConfig((oldConfig) => (config ? { ...oldConfig, ...config } : { ...configDefault }))
  }


  return (
    <>
         <SlugifyInput
          setStorage={AddNewSlugify}
          config={config}
          changeConfig={changeConfig}
          title={title}
          setTitle={setTitle}
        />
       {result.length > 0 && <SlugifyResults toEdited={toEdited} slugs={result} deleteSlugi={deleteSlugify} />}
    </>
  )
}