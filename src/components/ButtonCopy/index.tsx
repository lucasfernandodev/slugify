import { FC, useState } from 'react';
import { IconClipboard } from '@tabler/icons-react';
import copy from 'copy-to-clipboard';
import { Toast } from '../Toast';

interface IProps {
  content: string;
}

export const ButtonCopy: FC<IProps> = ({ content = '' }) => {
  const duration = 3000;
  const [isCopy, setIsCopy] = useState(false);

  const copyToClipboard = () => {
    let _isCopy = copy(content);
    _isCopy && setIsCopy(true)
  };

  const closeToast = () => {
    setIsCopy(false)
  }

  return (
    <> {isCopy === true ? <Toast onClose={closeToast} duration={duration} /> : null}
      <button onClick={copyToClipboard}>
        <IconClipboard />
      </button>
    </>

  )
}