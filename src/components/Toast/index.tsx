import { IconClipboardCheck, IconX } from '@tabler/icons-react';
import style from './style.module.css';
import { FC, useEffect, useRef } from 'react';

interface IProps {
  duration: number;
  onClose: () => void
}

export const Toast: FC<IProps> = ({ duration = 1000, onClose }) => {
  const toastRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    let timer: number | null = null;
    let root = toastRef.current;

    if (root) {
      root.style.setProperty('--timer-to-close', duration + 'ms');
    }

    timer = setTimeout(() => {
      onClose && onClose()
    }, duration)

    return () => {
      clearTimeout(timer as number)
    }
  }, [duration, toastRef])

  return (
    <div className={style.toast} ref={toastRef}>
      <div className={style.icon}>
        <IconClipboardCheck strokeWidth={1} />
      </div>
      <h3>Slug copiado com sucesso!</h3>
      <button onClick={onClose} className={style.close}>
        <IconX />
      </button>
    </div>
  )
}