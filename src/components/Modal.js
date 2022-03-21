import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ModalContainer,
  ModalOverlay,
  CloseIconDiv,
  ModalContent,
} from "./styles/ModalStyles";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        <CloseIconDiv type="IconDiv" onClick={onClose}>
          <AiOutlineCloseCircle size={20}/>
        </CloseIconDiv>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
