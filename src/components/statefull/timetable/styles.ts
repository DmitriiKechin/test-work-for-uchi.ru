import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  flex: 1 1 60%;
  min-height: 50%;
  width: 100%;
  display: flex;

  overflow-y: scroll;

  /* не использовать данный способ убирания скролла на коммерческих проектах */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Times = styled.div`
  display: flex;
  flex-direction: column;

  width: 12%;
  margin-left: 2.3%;
`;

export const Time = styled.div`
  min-height: calc(1.72rem + 2px);
  font-size: 0.58rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
`;

export const Table = styled.div`
  width: 88%;
  height: calc((1.72rem + 2px) * 14);

  margin-top: 0.3rem;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(14, 1.72rem);
  justify-items: center;
  align-items: center;
  gap: 2px;

  border-top: 2px solid ${(props) => props.theme.colors.Secondary};
  border-bottom: 2px solid ${(props) => props.theme.colors.Secondary};

  background-color: ${(props) => props.theme.colors.Secondary};
`;

export const CellWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3px;

  background-color: ${(props) => props.theme.colors.light};
`;

export const Cell = styled.div<{ isActive?: boolean; isFilled: boolean }>`
  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.colors.light};

  ${(props) =>
    props.isFilled &&
    css`
      background: ${(props) => props.theme.colors.Secondary};
    `}

  ${(props) =>
    props.isActive &&
    css`
      background: ${(props) => props.theme.colors.Primary};
    `}
`;
