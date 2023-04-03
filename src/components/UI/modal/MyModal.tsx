import React, {type ReactElement, type ReactFragment} from 'react';
import './MyModal.css';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactElement | ReactFragment;
}

const MyModal = ({children, visible, setVisible}: Props) => {
  const rootClasses = ['my-modal'];

  if (visible) {
    rootClasses.push('my-modal--active');
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => { setVisible(false); }}
    >
      <div
        className='my-modal__content'
        onClick={(e) => { e.stopPropagation(); }}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
