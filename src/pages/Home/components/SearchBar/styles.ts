import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
`
export const SearchBarInput = styled.input`
  height: 3.125rem;
  width: 100%;
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme['base-input']};

  &:focus {
    color: ${(props) => props.theme['base-text']};
  }
`
