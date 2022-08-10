import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 700px;
  height: 200vh;
`;

export const Substrate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;

  z-index: -1;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  object-fit: contain;
  object-position: top;
`;
