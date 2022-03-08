import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const LoadingModal = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <StyledModalOverlay>
      <StyledModal>
        {/* <StyledModalBody>{children}</StyledModalBody> */}
        <StyledModalBody>
          <div className="sbl-circ"></div>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  );
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: auto;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export default LoadingModal;
