import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 740px;
  min-height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const Substrate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
  object-position: top;
`;
