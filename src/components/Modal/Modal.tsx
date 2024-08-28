import { createPortal } from "react-dom";
import "./style.scss";
import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  children?: ReactNode | ReactNode[];
};

const Modal = ({
  isOpen,
  children
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }
  
  
  return createPortal(
    <div className="modal__layer">
      <div className="modal">
        {children}
      </div>
    </div>,
    document.body
  )
};

export default Modal;
