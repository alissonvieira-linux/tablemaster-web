import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(50%)
  } to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 40;

  display: flex;
  animation: ${appearFromLeft} 1.5s;
`;

export const Overlay = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  width: 740px;
  max-width: 740px;
  min-width: 620px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;

  header {
    width: 100%;
    min-height: 62px;
  }

  section {
    width: 90%;
    min-width: 470px;
    padding-top: 30px;
  }
`;