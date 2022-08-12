import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0 0 2.3rem;

  padding: 0 6.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.8rem;
  background-color: ${(props) => props.theme.colors.background};

  /* margin-top: -18.5%; */

  border-top: 2px solid ${(props) => props.theme.colors.Secondary};
  border-bottom: 2px solid ${(props) => props.theme.colors.Secondary};
`;
