import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ModalBox,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalProps,
  ModalWrapper,
} from './styled';

import { useRef, useEffect } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({
  children,
  shown,
  onClose,
  title = 'Title Here',
}: ModalProps) => {
  console.log('Mondal render');
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeModalOnBlur = (event: any) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', closeModalOnBlur);

    return () => {
      document.removeEventListener('mousedown', closeModalOnBlur);
    };
  }, [boxRef]);

  return (
    <ModalWrapper shown={shown}>
      <ModalBox ref={boxRef}>
        <ModalHeader>
          <h2>{title}</h2>
          <ModalClose onClick={onClose}>
            <FontAwesomeIcon
              className='text-gray-500 hover:text-brand-purple-800'
              icon={faXmark}
            />
          </ModalClose>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </ModalWrapper>
  );
};

export default Modal;
