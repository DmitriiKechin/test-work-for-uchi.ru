import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  overflow-x: scroll;

  margin-top: 3%;

  height: 2.35rem;
  width: 100%;

  padding-bottom: 2%;

  /* не использовать данный способ убирания скролла на коммерческих проектах */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DaysScroll = styled.div`
  height: 100%;
  width: 343%;

  position: relative;
  left: 0;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Day = styled.div`
  height: 100%;
  /* min-width: 2.18rem; */
  min-width: 4.2%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const WeekDay = styled.div`
  font-size: 0.45rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
`;

export const DateNumber = styled.button<{ isActive?: boolean }>`
  height: 1.25rem;
  width: 1.25rem;

  border-radius: 50%;

  font-size: 0.7rem;
  line-height: 1.25rem;
  font-weight: 500;

  text-align: center;
  color: ${(props) => props.theme.colors.dark};

  cursor: pointer;

  &:hover {
    outline: 0.05rem solid ${(props) => props.theme.colors.accent};
  }

  &:active {
    box-shadow: inset 0 0 0.1em ${(props) => props.theme.colors.Secondary};
  }

  ${(props) =>
    props.isActive &&
    css`
      background: ${(props) => props.theme.colors.accent};
      color: ${(props) => props.theme.colors.light};
      font-weight: 400;
    `}
`;
