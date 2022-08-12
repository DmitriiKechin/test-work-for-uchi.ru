import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0 0 3.75rem;
  padding: 0 1% 0 12.5%;

  border-top: 2px solid ${(props) => props.theme.colors.Secondary};
  border-bottom: 2px solid ${(props) => props.theme.colors.Secondary};

  background-color: ${(props) => props.theme.colors.background};
`;
