import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";

export const ModalStates = {
  Active: "active",
  Disabled: "disabled",
} as const;

interface ModalMainProps {
  children: ReactNode;
  id: string;
  isModalOpen: "active" | "disabled";
}
export const ModalMain = ({ children, id, isModalOpen }: ModalMainProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState<string>(isModalOpen);

  useEffect(() => {
    try {
      const modalElement = document.getElementById(id);

      if (!modalElement) throw new Error("Modal element not found");

      setContainer(modalElement);
      openModal();
    } catch (error) {
      console.error(error);
    }

    return () => {
      setContainer(null);
      closeModal();
    };
  }, [id]);

  const openModal = () => {
    setIsPortalOpen(ModalStates.Active);
  };

  const closeModal = () => {
    setIsPortalOpen(ModalStates.Disabled);
  };

  return container && isPortalOpen === ModalStates.Active
    ? createPortal(children, container)
    : null;
};
