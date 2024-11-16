import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string) => void;
};

const LoginModal = ({ isOpen, osClone, onLogin }: LoginModalProps) => {
  const [name, setName] = useState<string>("");

  
};

export default LoginModal;
