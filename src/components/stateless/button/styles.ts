import styled from 'styled-components';

export const Wrapper = styled.button<{ fontSize?: string }>`
  border-radius: 1em;
  padding: 0 0.2em;

  text-align: center;
  line-height: 1;
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.fontSize || 'inherit'};
  font-weight: inherit;

  background: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.light};
    background-color: ${(props) => props.theme.colors.accent};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.gray};
    cursor: none;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.accent};
    box-shadow: inset 0 0 0.1em ${(props) => props.theme.colors.Secondary};
  }
`;
