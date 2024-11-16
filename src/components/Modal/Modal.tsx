import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  };

  return (
    <div>
      <div>
        <button></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
