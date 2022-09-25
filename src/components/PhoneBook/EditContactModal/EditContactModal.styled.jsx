import styled from 'styled-components';

export const Modal = styled.div`
  height: 400px;
  max-height: 100%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 15vw;
  max-width: 35vw;
  padding: 1rem;
  background-color: rgba(201, 240, 243, 0.95);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const LabelModal = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
`;
